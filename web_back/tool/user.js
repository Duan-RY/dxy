var user = {
    login: function(options) {
        $.ajax({
            type: 'post',
            url: USER_LOGIN,
            data: options.data,
            success: options.callback,
        })
    },
    logout: function(options) {
        $.ajax({
            type: 'post',
            url: USER_LOGOUT,
            success: options.callback,
        })
    },
    getAllInfo: function(options) {
        $.ajax({
            type: 'get',
            url: USER_INFO_GET,
            success: options.callback,
        })
    }

}