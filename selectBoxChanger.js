(function( $ ){
    $.fn.selectBoxChanger = function (rubrique,activite,hiddenBox){
        rubrique.change(function(){
            var valeur = rubrique.val();
            activite.contents().appendTo(hiddenBox);
            $.each(hiddenBox.contents(),function(){
                if(valeur === $(this).val()[1])
                {
                    $(this).appendTo(activite);
                }
            })
        });
    }
}(jQuery));

$.fn.selectBoxChanger($('#devisEntreprise_rubriques'),$('#devisEntreprise_activitePrincipale'),$('#hiddenBox'));
$.fn.selectBoxChanger($('#devisEntreprise_rubriquesSecondaire'),$('#devisEntreprise_activiteSecondaire'),$('#hiddenBoxSecondaire'));
$.fn.selectBoxChanger($('#devisEntreprise_rubriquesAnnexe'),$('#devisEntreprise_activiteAnnexe'),$('#hiddenBoxAnnexe'));


