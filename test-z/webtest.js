function inputCheck() {
    var temp=document.inputForm.sumai;
    if (temp.value==null||temp.value=='') {
        window.alert("必須項目が未入力です。");
        return false;
    }
    return true;
}

function mgzCheck() {
    var temp=document.inputForm.mgz;
    for (var i=0;i<temp.length;i++) {
        temp[i].disabled=!document.inputForm.magezine.checked;
    }
}