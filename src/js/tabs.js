function tabsHandeler(){
    console.log('la fonction tabsHandler est lancé');

    var component = $('.tabs');
    component.each(function(){
        var that =$(this),

        componentNav = that.find('.tabs-nav'),
        componentNavItems= componentNav.find('li'),
        componentContents= that.find('.tabs-content');

    componentNavItems.on('click',function(){
        var targetID=$(this).data('id');

        console.log('je click sur'+ targetID);

        if($('#'+targetID).hasClass('tabs-content--inactive')){
            console.log('Mon élément est masqué');
            //componentContents.hide();
            //$('#'+ targetID).show();
               
            //Gestion de l'affichage du contenu
            componentContents.addClass('tabs-content--inactive');
            $('#'+ targetID).removeClass('tabs-content--inactive');

            //Gestion de l'affichage du menu
            componentNavItems.removeClass('tabs-nav-item--active');
            $(this).addClass('tabs-nav-item--active');
        }else{
            console.log('Mon élément est visible');
            }

        });
          
    });
};

$(document).ready(function(){
    var tabscomponent=$('.tabs');
    console.log('le dom est pret');

    if(tabscomponent.length > 0){
        console.log(' mon composant tabs est bien present');
        tabsHandeler();
    } else{
        console.log(' mon composant tabs n\' est pas chargé');

    }

});