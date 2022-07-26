module.exports = function () {
    var request = {}
    return {
        logger: function (data) {
            request.info = 'App for read logs of SSbrowser and Xfsservice';
            return request;
        },

        tools: function (data) {
            request.info =  'Differents softwares for develop';
            return request;
        },

        info: function (data) {
            request.info =  'General info of NCR';
            return request;
        },

        
       


    }
}

