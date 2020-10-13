function getAllEmployees() {
    const baseUrl = "http://dummy.restapiexample.com/api/v1/employees";
    $.ajax({
        url: baseUrl, 
        method: "GET", 
        success: function(data, textStatus) {
            // console.log(textStatus + " " + JSON.stringify(data));
            if(textStatus === "success"){
                let list = data.data;
                const len = list.length;
                for(let i=0; i<len; i++){
                    const emp = list[i];
                    let td0 = $("<td></td>").text(list[i].id);
                    let td1 = $("<td></td>").text(list[i].employee_name);
                    let td2 = $("<td></td>").text(list[i].employee_salary);
                    let td3 = $("<td></td>").text(list[i].employee_age); 
                    let img = $("<img alt='delete' width='30' height='30' />").attr("src","img/delete.jpg");
                    img.click(function() {
                        if(confirm("are you sure?")){
                            $("#tr"+ i).remove();
                        }
                    });
                    let td4 = $("<td></td>").append(img);
                    let tr = $("<tr></tr>");
                    tr.attr("id", "tr"+ i);
                    tr.append(td0);
                    tr.append(td1);
                    tr.append(td2);
                    tr.append(td3);
                    tr.append(td4);
                    $("#empList > tbody").append(tr);
                }
                
            } else {
                $("#list").html("<p>Error loading the data").css("color","red"); 
            }
        }, 
        error: function(err) {
            console.log("Error in Get Request: " + err.message());
        }
    });
}

function addEmployee() {

    const reqData = {"name":"test","salary":"123","age":"23"};
    reqData.name = $("#empName").val();
    reqData.salary = $("#empSalary").val();
    reqData.age = $("#empAge").val();

    const createUrl = "http://dummy.restapiexample.com/api/v1/create";
    $.ajax({
        url: createUrl, 
        method: "POST", 
        data: reqData,
        success: function(data, textStatus) {
            // console.log(textStatus + " " + JSON.stringify(data));
            if(textStatus === "success"){
                $("#msg").text(data.message).css("color","green");
                reqData.name = $("#empName").val("");
                reqData.salary = $("#empSalary").val("");
                reqData.age = $("#empAge").val("");
            } else {
                $("#msg").text(textStatus).css("color","red"); 
            }
        }, 
        error: function(err) {
            console.log("Error in Get Request: " + err.message());
        }
    });
}



function validateEmp() {
    var regex = new RegExp("^[a-zA-Z\s]+$");
    if($("#empAge").val() === undefined || $("#empAge").val() < 18) {
        return false;
    }
    else if($("#empSalary").val() === undefined || $("#empSalary").val() < 30000) {
        return false;
    } 
    else if($("#empName").val() === undefined || $("#empName").val().length < 3) {
        return false;
    }
    else {
        if(!regex.test($("#empName").val())) {
            return false;
        } else{
            return true;
        }
        
    }
}