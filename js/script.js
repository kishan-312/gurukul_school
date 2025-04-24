function headerSticky() {

    let isFooterVisible = false ;
    const header = document.querySelector("[data-header]");
    const footer = document.querySelector("[data-footer]");

    if (!header || !footer) return;


    window.addEventListener("scroll" , function() {

        if(!isFooterVisible) {

            if(window.scrollY > 0) {

                header.classList.add("sticky");

            }

            else {

                header.classList.remove("sticky");

            }

        }

    } )

    // const observer = new IntersectionObserver(([entry]) => {

    //     isFooterVisible = entry.isIntersecting;

    //     if(isFooterVisible) {

    //         header.classList.remove("sticky");

    //     }


    // } )

    // observer.observe(footer)


}


headerSticky()


function hoverTabs() {

    const $buttons = document.querySelectorAll("[data-tab-btn]");
    const $contents = document.querySelectorAll("[data-tab-content]");
    const $iconChevronDown = document.querySelectorAll("[data-chevron-down]");


    $buttons.forEach(($button) => {

        const tabKey = $button.dataset.tabBtn;

        $button.addEventListener("mouseover" , function() {

            const $activeElement = document.querySelector(`[data-tab-content="${this.dataset.tabBtn}"]`);

            $contents.forEach(($content) => {

                $content.classList.remove("active") ;

            } )


            $activeElement.classList.add("active") ;

            $iconChevronDown.forEach(($icon) => {

                const iconTabKey = $icon.closest('li')?.dataset.tabBtn;
                $icon.classList.toggle("active", iconTabKey === tabKey);

                // if($icon.closest('li').dataset.tabBtn === this.dataset.tabBtn) {

                //     $icon.classList.add("active");
                    

                // }
                // else {

                //     $icon.classList.remove("active");
                    
                // }

            } )

        } )

        $button.addEventListener("mouseleave", function() {

            const $activeElement = document.querySelector(`[data-tab-content="${this.dataset.tabBtn}"]`);



            $activeElement.classList.remove("active") ;

            $iconChevronDown.forEach(($icon) => {

                $icon.classList.remove("active");

            } )


        })

    } )
 

}
hoverTabs()

function hoverTabs2() {

    const $dataGroup = document.querySelectorAll("[data-group]");

    $dataGroup.forEach(($group) => {

        const $items = $group.querySelectorAll("[data-item]");
        const $contents = $group.querySelectorAll("[data-item-content]");
        const $header = document.querySelector("[data-header]");

        const [$item1] = $items ;
        const $itemName = $item1.dataset.item ;
        const $itemContent = $group.querySelector(`[data-item-content="${$itemName}"]`);

        $item1.classList.add("active");
        $itemContent.classList.add("active") ;


        $items.forEach(($item) => {

            $item.addEventListener("mouseover" , function() {

                const $activeElement = document.querySelector(`[data-item-content="${this.dataset.item}"]`)

                $contents.forEach(($content) => {

                    $content.classList.remove("active");

                } )

                $items.forEach(($other) => $other.classList.remove("active") ) ;
 
                $activeElement?.classList.add("active");
                $item.classList.add("active") ;

            } )

      

        } )

        $header.addEventListener("mouseleave" , function() {

            $contents.forEach(($content) => {

                $content.classList.remove("active") ;

            } )

            $items.forEach(($other) => $other.classList.remove("active") ) ;

            $item1.classList.add("active") ;
            $itemContent.classList.add("active") ;


        } )


    } )



}

hoverTabs2();


function sidebarToggle() {

    const $menubarToggleBtn = document.querySelector("[data-menu-toggle-btn]");
    const $menubarContainer = document.querySelector("[data-menu-bar]");
    const $menubarSymbol = document.querySelector("[data-bar-symbol]");
    const $menuBarItems = document.querySelectorAll("[data-menu-bar-item-btn]");
    const $menuBarItemContents = document.querySelectorAll("[data-menu-bar-item-content]");
    const $iconChevronDown = document.querySelectorAll("[data-chevron-down-2]");


    if(!$menubarContainer || !$menubarToggleBtn) return


    $menubarToggleBtn.addEventListener("click" , function() {

        $menuBarItemContents.forEach(($contents) => {

            $contents.classList.remove("active");

        } )

        $menuBarItems.forEach(($otherItem) => {

            $otherItem.classList.remove("active") ;

        } )


        $iconChevronDown.forEach(($icon) => {

            $icon.classList.remove("active") ;


        } )


        if(window.innerWidth < 1200) {

            $menubarContainer.classList.toggle("active") ;
            if($menubarSymbol.classList.contains("fa-bars")) {

                $menubarSymbol.classList.replace("fa-bars","fa-close");
    
            }
    
            else {
    
                $menubarSymbol.classList.remove("fa-close");
                $menubarSymbol.classList.add("fa-bars");
    
    
            }
            
        }

    } );


    window.addEventListener("resize" , function() {

        if(window.innerWidth > 1200) {

            $menubarContainer.classList.remove("active") ;
            $menubarSymbol.classList.remove("fa-close");
            $menubarSymbol.classList.add("fa-bars");

        }


    } )
 

}


sidebarToggle()


function sidebarContentaccordion() {

    const $menuBarItems = document.querySelectorAll("[data-menu-bar-item-btn]");
    const $menuBarItemContents = document.querySelectorAll("[data-menu-bar-item-content]");
    const $iconChevronDown = document.querySelectorAll("[data-chevron-down-2]");

    $menuBarItems.forEach(($item) => {

        $item.addEventListener("click", function() {

                const $activeElement = document.querySelector(`[data-menu-bar-item-content="${this.dataset.menuBarItemBtn}"]`) ;

                const isAlreadyActive = $activeElement.classList.contains("active");

                $menuBarItemContents.forEach(($contents) => {

                    $contents.classList.remove("active");

                } )

                $menuBarItems.forEach(($otherItem) => {

                    $otherItem.classList.remove("active") ;

                } )


                if(!isAlreadyActive) {

                    $activeElement.classList.add("active");
                    this.classList.add("active");

                    

                }

                else {

                    $activeElement.classList.remove("active");
                    this.classList.remove("active");


                }


                
                $iconChevronDown.forEach(($icon) => {

                    if($icon.closest("button").dataset.menuBarItemBtn === this.dataset.menuBarItemBtn ) {

                        $icon.classList.toggle("active") ;

                    }

                    else {

                        $icon.classList.remove("active") ;

                    }

                } )



        }  )


    } )


}


sidebarContentaccordion()

function sidenarcontentsubaccordion() {

    const $icons = document.querySelectorAll("[data-menu-bar-item-subcontent]");
    const $contents = document.querySelectorAll("[data-menu-bar-item-subcontent-container]");

    $icons.forEach(($icon) => {


        $icon.addEventListener("click" , function() {

        const $currentContent = document.querySelector(`[data-menu-bar-item-subcontent-container="${this.dataset.menuBarItemSubcontent}"]`)
        
        const $isAlreadyActive = $currentContent.classList.contains("active") ;

            $contents.forEach(($content) => {

                $content.classList.remove("active") ;

            } )

            $icons.forEach(($icon) => {

                $icon.classList.replace("fa-minus", "fa-plus") ;

            } )
 
            if(!$isAlreadyActive) {

               $currentContent.classList.add("active") ;
               $icon.classList.replace("fa-plus","fa-minus");

            }




        } )


    } )

}

sidenarcontentsubaccordion()

function footer() {

    const getYearData = document.querySelector("[data-year]");
    const getYear = new Date().getFullYear() ;
    console.log(getYear);
    getYearData.textContent = getYear;

}

footer()



//   function sliderContainer() {
//     const container = document.getElementById('sliderContainer');
//     const slider = document.getElementById('slider');
//     const slideInterval = 3000;
//     const slideGap = 24;
//     const slideWidth = 260;
//     const sliderWidth = slideWidth + slideGap ;
  
//     let currentSlide = 0 ;
  
//     const originalSlides = Array.from(slider.children) ;
  
//     // Clone once to get started
//     originalSlides.forEach(slide => {
//       const clone = slide.cloneNode(true);
//       slider.appendChild(clone);
//     });
  
//     let allSlides = Array.from(slider.children);
  
//     allSlides.forEach((slide, index) => {
//       if (index < allSlides.length - 1) {
//         slide.style.marginRight = `${slideGap}px`;
//       }
//     });
  
//     function moveToSlide(index) {
//       slider.style.transition = 'transform 0.5s ease';
//       slider.style.transform = `translateX(-${index * sliderWidth}px)`;
//     }
  
//     function keepCloning() {
//       const slides = Array.from(slider.children);
//       const maxVisibleSlides = Math.ceil(container.offsetWidth / sliderWidth);
      
//       // Clone when nearing the end
//       if (currentSlide + maxVisibleSlides >= slides.length) {
//         originalSlides.forEach(slide => {
//           const clone = slide.cloneNode(true);
//           slider.appendChild(clone);
//         });
//       }
//     }
  
//     let autoSlide = setInterval(() => {
//       currentSlide++;
//       moveToSlide(currentSlide);
//       keepCloning();
//     }, slideInterval);

//     // 
  
//     container.addEventListener('mouseenter', () => clearInterval(autoSlide));
//     container.addEventListener('mouseleave', () => {
//       autoSlide = setInterval(() => {
//         currentSlide++;
//         moveToSlide(currentSlide);
//         keepCloning();
//       }, slideInterval);
//     });
//   }
  
//   sliderContainer();
  
  function sliderContainer() {
    const container = document.getElementById('sliderContainer');
    const slider = document.getElementById('slider');
    const slideInterval = 3000;
    const slideGap = 24;
  
    let currentSlide = 0;
  
    const originalSlides = Array.from(slider.children);
  
    // Clone once to get started
    originalSlides.forEach(slide => {
      const clone = slide.cloneNode(true);
      slider.appendChild(clone);
    });
  
    let allSlides = Array.from(slider.children);
  
    // Add right margin
    allSlides.forEach((slide, index) => {
      if (index < allSlides.length - 1) {
        slide.style.marginRight = `${slideGap}px`;
      }
    });
  
    // Get the actual width (includes margin)
    function getSlideWidth() {
      const slide = slider.children[0];
      const style = window.getComputedStyle(slide);
      const width = slide.offsetWidth;
      const marginRight = parseFloat(style.marginRight);
      return width + marginRight;
    }
  
    function moveToSlide(index) {
      const sliderWidth = getSlideWidth();
      slider.style.transition = 'transform 0.5s ease';
      slider.style.transform = `translateX(-${index * sliderWidth}px)`;
    }
  
    function keepCloning() {
      const sliderWidth = getSlideWidth();
      const maxVisibleSlides = Math.ceil(container.offsetWidth / sliderWidth);
      const slides = Array.from(slider.children);
  
      if (currentSlide + maxVisibleSlides >= slides.length) {
        originalSlides.forEach(slide => {
          const clone = slide.cloneNode(true);
          slider.appendChild(clone);
        });
      }
    }
  
    let autoSlide = setInterval(() => {
      currentSlide++;
      moveToSlide(currentSlide);
      keepCloning();
    }, slideInterval);
  
    container.addEventListener('mouseenter', () => clearInterval(autoSlide));

    container.addEventListener('mouseleave', () => {

      autoSlide = setInterval(() => {
        currentSlide++;
        moveToSlide(currentSlide);
        keepCloning();
      }, slideInterval);
      
    });
  }
  
  sliderContainer();
  