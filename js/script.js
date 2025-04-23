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

function sliderContainer() {

    const container = document.getElementById('sliderContainer');
    const slider = document.getElementById('slider');
    const slideInterval = 3000;
    let isDragging = false;
    let startX, scrollLeft;
    let sliderWidth = 260 + 24; // image width + gap
    let currentSlide = 0;
  
    // Clone the first image and append it to the end for seamless looping
    const firstSlide = slider.children[0].cloneNode(true);
    slider.appendChild(firstSlide);
  
    // Auto scroll
    let autoSlide = setInterval(() => {
      currentSlide++;
      if (currentSlide >= slider.children.length) {
        currentSlide = 1; // Skip the cloned first image (which is now at the end)
        slider.style.transition = 'none'; // Remove transition to jump seamlessly
        slider.style.transform = `translateX(0)`;
        setTimeout(() => {
          slider.style.transition = 'transform 0.5s ease'; // Re-enable transition after jump
        }, 50); // Small timeout to let the jump happen
      } else {
        slider.style.transform = `translateX(-${currentSlide * sliderWidth}px)`;
      }
    }, slideInterval);
  
    // Pause on hover
    container.addEventListener('mouseenter', () => clearInterval(autoSlide));
    container.addEventListener('mouseleave', () => {
      autoSlide = setInterval(() => {
        currentSlide++;
        if (currentSlide >= slider.children.length) {
          currentSlide = 1;
          slider.style.transition = 'none';
          slider.style.transform = `translateX(0)`;
          setTimeout(() => {
            slider.style.transition = 'transform 0.5s ease';
          }, 50);
        } else {
          slider.style.transform = `translateX(-${currentSlide * sliderWidth}px)`;
        }
      }, slideInterval);
    });
  
    // Drag to scroll
    container.addEventListener('mousedown', (e) => {
      isDragging = true;
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    });
  
    container.addEventListener('mouseleave', () => {
      isDragging = false;
    });
  
    container.addEventListener('mouseup', () => {
      isDragging = false;
    });
  
    container.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 1.5; // scroll speed
      container.scrollLeft = scrollLeft - walk;
    });
  
    // Touch support
    container.addEventListener('touchstart', (e) => {
      isDragging = true;
      startX = e.touches[0].pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    });
  
    container.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      const x = e.touches[0].pageX - container.offsetLeft;
      const walk = (x - startX) * 1.5;
      container.scrollLeft = scrollLeft - walk;
    });
  
    container.addEventListener('touchend', () => {
      isDragging = false;
    });
        

}

sliderContainer()



