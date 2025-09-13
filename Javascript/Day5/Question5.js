 function handler()
        { let d = document.getElementById("n").value;
            arr=[]
            let output="<table border=2>"
            for(var i=1;i<=10;i++)
            {
                let str = `<tr> <td> ${d} *  ${i} = ${d*i} </td></tr>`
             output = output.concat(str)
            }
            output=output.concat("</table>")
            document.getElementById("d1").innerHTML = output
        }
