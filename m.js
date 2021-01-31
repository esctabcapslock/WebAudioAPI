var http = require('http');
var fs = require('fs');

function ok(xx){
    var a = `\/:"'?<>|`;
    for (var i=0; i<a.length; i++){
        if (xx.includes(a[i])) return 0;
    }
    return 1;
}

var server = http.createServer(function(request,response){
    resourcePath='월식2 - 복사본.tif'
    console.log(decodeURIComponent(request.url));
  

  // html 페이지 요청이 들어왔을 경우는 텍스트 파일 처리
    if (request.url=='/'){
        
        fs.readdir('./',(E,파일목록)=>{
            var out_html=`<meta name="viewport" content="width=device-width">`;
            for (var i=0; i<파일목록.length; i++){
                 out_html+=`<li><a href="${파일목록[i]}">${파일목록[i]}</a></li>`;
                var a="";
                for (var x in 파일목록[i]) a+=파일목록[i][x];
                console.log(a); 
                
            }
                   

            var 데이터 =  out_html; //out_html.toString().replace(/.mp3/g,"");
            var 확장자 = 'text/html; charset=utf-8'
            response.writeHead(200, {'Content-Type':확장자,'Accept-Ranges': 'bytes'} );//, 'Content-Length': 데이터.length.toString()

            response.end(데이터);
        });
        
    }
else if(ok(decodeURIComponent(request.url).replace(/\//g,""))){
    _url=decodeURIComponent(request.url).replace(/\//g,"");
    // 1. stream 생성
    var stream = fs.createReadStream(_url);
    // 2. 잘게 쪼개진 stream 이 몇번 전송되는지 확인하기 위한 count
    var count = 0;
    var length = 0;
    // 3. 잘게 쪼개진 data를 전송할 수 있으면 data 이벤트 발생 
    stream.on('data', function(data) {
        count++;
        length+=data.length;
        if(!(count%50)) console.log('data count='+count/50);
      // 3.1. data 이벤트가 발생되면 해당 data를 클라이언트로 전송
      response.write(data);
    });

    // 4. 데이터 전송이 완료되면 end 이벤트 발생
    stream.on('end', function () {
      console.log('end streaming', length);
      // 4.1. 클라이언트에 전송완료를 알림
        //response.writeHead(200, {'Content-Length': length.toString()} );
        response.end();
    });

    // 5. 스트림도중 에러 발생시 error 이벤트 발생
    stream.on('error', function(err) {
      console.log('err');
      // 5.2. 클라이언트로 에러메시지를 전달하고 전송완료
      //response.end('500 Internal Server '+err);
    });
  }else{
    response.writeHead(404, {'Content-Type':'text/html'});
    response.end('404 Page Not Found');
  }
});

const port=80;
server.listen(port, function(){
    console.log(`Server is running at localhost:${port}`);
});