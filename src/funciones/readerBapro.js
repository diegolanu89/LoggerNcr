module.exports = function () {
    return {
        get_operations: function (data) {

            var object = {}
            object["date"] = data[0].date
            object["start"] = data[0].hour
            var length = 0
            var types = ["event:", "runningstate:", "DisplayScreen"]
            var trad_types = ["total_events", "total_states", "total_display"]
            object["total_events"] = 0
            object["total_states"] = 0
            object["total_display"] = 0
            object["cash_in"] = [];

            for (var i in data) {
                length = i;
                for (var j in types) {
                    if (data[i].type === types[j])
                        object[trad_types[j]]++
                }
                object["cash_in"].push(this.get_cash_in_confirmed(i, data));
            }
            object["cash_in"] = object["cash_in"].filter(e => e != null)
            object["cash_in_confirmed"] = object["cash_in"].length;
            object["items"] = length
            object["end"] = data[length].hour;

            while (object["end"] === undefined) {
                length--;
                object["end"] = data[length].hour
            }

            return object
        },

        get_cash_in_confirmed: function (pos, data) {
            var action = {};
            var siguiente = parseInt(pos) + 3;
            if ((data[pos].type === "Amount:") && (data[siguiente].detail === "confirm")) {
                action["Mount"] = data[pos].detail
                action["Hour"] = data[pos].hour
                action["pos"] = pos
                return (action)
            }
            else
                return null
        },

        get_cash_operation: function (operation, data) {
            var found = false;
            var start = 0;
            var end = 0;
            var object = {}
            for (let i = operation.pos - 1; i >= 0; i--) {
                var j = parseInt(i) - 1;
                if (j < 0) j = 0;
                if ((data[i].detail === "cim/ingresar_billetes") && (data[j].detail === "confirmar")) {
                    start = i;
                    found = true;
                    break;
                }
            }
            if (found === false)
                return false;
            object["start"] = start
            var k = parseInt(operation.pos) + 1
            found = false;
            while (data[k] !== undefined) {
                if (data[k].detail === "print_ok") {
                    found = true
                    end = k
                    break;
                }
                k++
            }
            if (found === false) {
                object["end"] = false
                return object;
            }
            if (data[end] === null)
                return object
            var a = [];
            for (let i = start; i <= end; i++) {
                a.push(data[i])
            }
            object["end"] = end
            object["log_partition"] = a
            return object;
        },


    }
}

