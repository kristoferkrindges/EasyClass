const {createProxyMiddleware} = require('http-proxy-middleware');
var reqValues = new Map();
function relayRequestHeaders(proxyReq, req) {
    reqValues.forEach((value,key)=> {
        console.log('key:',key,'value',value);
        proxyReq._header = 
        console.log(proxyReq._header);
    })
    console.log('relayRequestHeaders',proxyReq.headers);
  };
 function relayResponseHeaders(proxyRes, req, res) {
    Object.keys(proxyRes.headers).forEach(function (key) {
        if(key.includes('via') || key.includes('x-amz-cf-pop') || key.includes('x-amz-cf-id'))
        reqValues.set(key,proxyRes.headers[key]);
    });
    //req.setHeader('Access-Control-Allow-Origin','https://q4eorgmov1.execute-api.sa-east-1.amazonaws.com/Prod');
  };
const proxy = {
    target: 'https://q4eorgmov1.execute-api.sa-east-1.amazonaws.com/Prod',
    changeOrigin: true,
    secure: true,
    cookieDomainRewrite: "localhost",
    //debug: true,
    preserveHeaderKeyCase: true,
    //onProxyReq: relayRequestHeaders,
    onProxyRes: relayResponseHeaders,
    onError: (error) => {
        console.log("onError", error);
    },
};
module.exports = function(app) {
        app.use('/aws',createProxyMiddleware(proxy));
}