new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods: {
        showAlert: function() {
            alert('This is an alert')
        },
        handlerInputKeyDown: function(event) {
            this.value = event.target.value
        }
    }
});