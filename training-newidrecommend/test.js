function solution(new_id) {
    document.write(new_id + '<br>');
    var answer = '';
    var idCheck3 = '';
    var temp ='';
    var reg = /[\{\}\[\]\/?,;:|\)*~`!^\+<>@\#$%&\\\=\(\'\"]/gi
    var idCheck1 = String(new_id);
    var idCheck2 = idCheck1.toLowerCase().replace(reg,'');
    document.write(idCheck2.match(/\./g).length + '<br>');
    for (var i=0; i<idCheck2.match(/\./g).length; i++){ 
        idCheck3 = idCheck2.replace(/\.\./g,'.');
        temp = idCheck3;
        idCheck2 = idCheck3;
    };
    document.write('idCheck3: ' + idCheck3 + '<br>');
    var idCheck4 = idCheck3.replace(/^\./,'').replace(/\.$/,'')
    document.write('idCheck4: ' + idCheck4 + '<br>');
    var idCheck5 = idCheck4.replace(null, "a");
    document.write('idCheck5: ' + idCheck5 + '<br>');
    temp = '';
    if (idCheck5.length >= 16){
        temp = idCheck5.slice(0,15);
        if (temp.length === null){
            var idCheck6 = idCheck5;
        }else{
            var idCheck6 = temp;
        }
    }
    document.write(idCheck6+ '<br>');
    document.write(answer);
    return answer;
}   