var btn = document.getElementById('validate');

var sec_resultCheckMDP = new Boolean(1);

var ID_BLOC_PASSWORD_SPECIAL_CHARCTER = "#blocPasswordSpecialCharcter";

var ID_BLOC_BLOC_PASSWORD_MORE_OR_LESS_8 = "#blocPasswordMoreOrLess8";

var ID_BLOC_PASSWORD_MATCHED = "#blocPasswordMatched";

var rules = [
    {
        idBloc: ID_BLOC_PASSWORD_SPECIAL_CHARCTER,
        rule: '(/^[0-9a-zA-Z]*$/g.test($(".newPassword").val()) && $(".newPassword").val().length > 0)'
    },
    {
        idBloc: ID_BLOC_BLOC_PASSWORD_MORE_OR_LESS_8,
        rule: '$(".newPassword").val().length >= 8 && $(".newPassword").val().length <= 16'
    },
    {
        idBloc: ID_BLOC_PASSWORD_MATCHED,
        rule: '(($(".newPassword").val() == $(".newPasswordConfirmation").val() && $(".newPassword").val().length > 0))'
    }
];


$(".newPassword, .newPasswordConfirmation").keyup(function () {
    rules.forEach(function (item) {
        if (eval(item.rule)) {
            blocValide(item.idBloc);
        } else {
            blocInvalide(item.idBloc);
        }
        statusButton();
    });
});


function blocInvalide(idBloc) {
    $(idBloc).find('i').removeClass().addClass("sr-invalide-password");
    $(idBloc).find('span').removeClass().addClass("sr-item-text-grey");
}

function blocValide(idBloc) {
    $(idBloc).find('i').removeClass().addClass("sr-valide-password");
    $(idBloc).find('span').removeClass().addClass("sr-item-text");

}


function statusButton() {

    (sec_resultCheckMDP == true ? btn.disabled = false : btn.disabled = true);
}

