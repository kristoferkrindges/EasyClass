const {createProxyMiddleware} = require('http-proxy-middleware');
const proxy = {
    target: 'https://wp66cisqye.execute-api.sa-east-1.amazonaws.com/Stage',
    changeOrigin: true,
    onProxyReq: async (proxyReq, req, res) => {
        console.log("onProxyReq",proxyReq,req)
        var via = res.via;
        var apiGw = res['x-amz-apigw-id'];
        var cfId = res['x-amz-cf-id'];
        var requestId = res['x-amzn-requestid'];
        if (via) {
            req.setHeader('via', via);
        }
        if(apiGw) {
            req.setHeader('x-amz-apigw-id', apiGw);
        }
        if(cfId) {
            req.setHeader('x-amz-cf-id', cfId);
        }
        if(requestId) {
            req.setHeader('x-amzn-requestid', requestId);
        }
    },
    onProxyReqWs: async (proxyReq, req, res) => {
        console.log("onProxyReq",proxyReq,req)
        var via = res.via;
        var apiGw = res['x-amz-apigw-id'];
        var cfId = res['x-amz-cf-id'];
        var requestId = res['x-amzn-requestid'];
        if (via) {
            req.setHeader('via', via);
        }
        if(apiGw) {
            req.setHeader('x-amz-apigw-id', apiGw);
        }
        if(cfId) {
            req.setHeader('x-amz-cf-id', cfId);
        }
        if(requestId) {
            req.setHeader('x-amzn-requestid', requestId);
        }
    },
    onError: (error) => {
        console.log("onError", error);
    },
};
module.exports = function(app) {
        app.use('/aws',createProxyMiddleware(proxy));
}