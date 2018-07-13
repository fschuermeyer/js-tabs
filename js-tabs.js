/**
 *  Javascript TabIH
 *  code Felix Schürmeyer
 *  version 0.2
 */

function wrap(el, wrapper) {
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
}

 function tabih(){
        // Get the Tabs
        let elm = document.getElementsByClassName('ih-tabs');
        
        // Search all Tabs by Class
        for(let i = 0; i < elm.length; ++i){
            let elments = elm[i];
            let article = elments.getElementsByTagName('article');

            let dom_html = '<ul class="ih-tabs-nav">';
            // START NAVIGATION
            for(let c = 0; c < article.length; ++c){
     
                let article_attr = article[c];
                let attr = article_attr.getAttribute('data-tab-name');
                if(c != 0){
                    dom_html += '<li data-click="'+ attr +'">'+ attr + '</li>';
                }else{
                    dom_html += '<li class="active" data-click="'+ attr +'">'+ attr + '</li>';
                    article_attr.classList.add('active');
                }
            }
            // ENDE NAVIGATION
            dom_html += '</ul>';

            var container = document.createElement('div');
            var att = document.createAttribute("class");       // Create a "class" attribute
            att.value = "ih-group";                           // Set the value of the class attribute
  
            container.setAttributeNode(att);

            wrap(elments,container);

            elments.insertAdjacentHTML( 'beforeBegin', dom_html );  // SET Navigation Before
    
            ihdefault(elments);
        }        
 }


 function ihdefault(elments){
    let lis = elments.previousSibling.getElementsByTagName('li');

    for(let i = 0; i < lis.length; ++i){
        let lisi = lis[i];

        lisi.addEventListener("click", function(){
            let click = this.getAttribute('data-click');
            let open = elments.querySelector('[data-tab-name="'+ click +'"]');
            open.classList.add('active');
            let article = elments.getElementsByTagName('article');
            for(let c = 0; c < article.length; ++c){
                let article_attr = article[c];
                if(article_attr.getAttribute('data-tab-name') !== click){
                    article_attr.classList.remove('active');

                }  
            }
            for(let b = 0; b < lis.length; ++b){
                let lisi_remove = lis[b];
                lisi_remove.classList.remove('active');
                console.log(lisi_remove);
            };

            this.classList.add('active');

        }); // END CLICK
    }
 }

