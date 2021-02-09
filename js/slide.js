//전역변수
var $slideWrap = document.getElementsByClassName('slide-wrap');
var $nextBtn   = document.getElementsByClassName('next-btn');
var $prevBtn   = document.getElementsByClassName('prev-btn');

    // console.log('$slideWrap 객체 배열 값:',$slideWrap.length);
    // console.log('$slideWrap 객체',$slideWrap);

    // //반복문 반복적인 작업을 손쉽게 한번에 처리한다.
    // for(var i=0; i<$slideWrap.length; i++){
    //     console.log($slideWrap[i]);
    // }

var slide = {
    init: function(){
        this.slide1Fn();
        this.slide2Fn();
        this.slide3Fn();
        this.slide4Fn();
    },
    
    slide1Fn: function(){
        // // DOM
        // // 1. 요소선택 쿼리 셀렉터 document.querySelector
        // // document.querySelector('#아이디);
        // // document.querySelector('.아이디');
        // // document.querySelector('태그');

        // // 2. 아이디 #section1 요소 선택 방법
        //     var $section1 = document.getElementById('section1');
        //     // console.log($section1);

        //     $section1.onclick = function(){
        //         alert('$section1 클릭 선택');
        //     }
        // //3. 클래스 .slide-wrap 요소 선택 방법
        //      var $slideWrap = document.getElementsByClassName('slide-wrap');
        //     // console.log($slideWrap);
        //     // console.log($slideWrap[0]);

        //     $slideWrap[0].onclick = function(){
        //         alert('$slideWrap[0]');
        //     }
        //     $slideWrap[1].onclick = function(){
        //         alert('$slideWrap[1]');
        //     }
        //     $slideWrap[2].onclick = function(){
        //         alert('$slideWrap[2]');
        //     }
        //     $slideWrap[3].onclick = function(){
        //         alert('$slideWrap[3]');
        //     }

        //     //4. 태그 div 요소 선택 방법
        //     var $div = document.getElementsByTagName('div');
        //     // console.log($div);
        //     console.log($div[0]);


        var cnt = 0;
      

        function nextSlideFn(){
            cnt++;
            cnt > 3 ? cnt=0 : cnt;
            $slideWrap[0].style = 'left:' + (-1200*cnt) + 'px';
        }
        
        function prevSlideFn(){
            cnt--;
            cnt < 0 ? cnt=3 : cnt;
            $slideWrap[0].style = 'left:' + (-1200*cnt) + 'px';
        }
        //버튼 등록 onclick Event
        /*
        $nextBtn[0].onclick = function(){
            nextSlideFn();
        }

        $prevBtn[0].onclick = function(){
            prevSlideFn();
        } */

        //버튼 등록 방법 : 버튼 추가(등록/add) 이벤트(Event) 리스너(Listener)
         // $nextBtn[0].addEventListener('click',nextSlideFn, false); 함수 이름만 호출 실행
            $nextBtn[0].addEventListener('click',function(event){
                event.preventDefault();
                nextSlideFn();
            }, false);
         // $prevBtn[0].addEventListener('click',prevSlideFn, false);
            $prevBtn[0].addEventListener('click',function(event){
                event.preventDefault();
                prevSlideFn();
            }, false);

     
    },   

    slide2Fn: function(){
        var cnt = 0;


        function nextSlideFn(){
            cnt++;
            cnt > 3 ? cnt=0 : cnt; 
            $slideWrap[1].style = 'left:' + (-400*cnt) + 'px'
        }
        
        function prevSlideFn(){
           cnt--;
           cnt < 0 ? cnt=3 : cnt;
           $slideWrap[1].style = 'left:' + (-400*cnt) + 'px'
        }

        //버튼 등록
        //클릭 이벤트 타겟 $nextBtn
        //event
        /*$nextBtn[1].onclick = function(){
            nextSlideFn()
        }
        $prevBtn[1].onclick = function(){
            prevSlideFn()
        }*/

        // 버튼 추가(add) 이벤트(Event) 리스너(Listener) 등록
        // $nextBtn[1].addEventListener('click',nextSlideFn, false);
        $nextBtn[1].addEventListener('click',function(e){
            e.preventDefault();
            nextSlideFn();
        }, false);

        // $prevBtn[1].addEventListener('click',prevSlideFn, false);
        $prevBtn[1].addEventListener('click',function(e){
            e.preventDefault();
            prevSlideFn();
        }, false);

    },

    slide3Fn: function(){
        var cnt = 0;
        var $slideWrap = document.getElementsByClassName ('slide-wrap');
        var $nextBtn    = document.getElementsByClassName ('next-btn');
        var $prevBtn = document.getElementsByClassName ('prev-btn');

        function nextSlideFn(){
            cnt++;
            cnt > 3 ? cnt=0 : cnt;
            $slideWrap[2].style = 'top:' + (-200*cnt) + 'px'
           }

        function prevSlideFn(){
            cnt--;
            cnt < 0 ? cnt=3 : cnt;
            $slideWrap[2].style = 'top:' + (-200*cnt) + 'px'
        }

        //버튼 등록
        /*$nextBtn[2].onclick = function(){
            prevSlideFn()
        }
        $prevBtn[2].onclick = function(){
            nextSlideFn()
        }*/

        // $nextBtn[2].addEventListener('click',prevSlideFn, false);
        $nextBtn[2].addEventListener('click',function(e){
            e.preventDefault();
            prevSlideFn();
        }, false);
        // $prevBtn[2].addEventListener('click',nextSlideFn, false);
        $prevBtn[2].addEventListener('click',function(e){
            e.preventDefault();
            nextSlideFn();
        }, false);

    },

    slide4Fn: function(){
        var cnt = 0;

        function nextSlideFn(){
            cnt++;
            cnt > 3 ? cnt=0 : cnt; 
            $slideWrap[3].style = 'left:' + (-400*cnt) + 'px'
        }

        function prevSlideFn(){
        cnt--;
        cnt < 0 ? cnt=3 : cnt;
        $slideWrap[3].style = 'left:' + (-400*cnt) + 'px'
        }

        //버튼 등록
        /*$nextBtn[3].onclick = function(){
            nextSlideFn()
        }
        $prevBtn[3].onclick = function(){
           prevSlideFn()
        }*/

        // $nextBtn[3].addEventListener('click',nextSlideFn, false);
        $nextBtn[3].addEventListener('click',function(e){
            e.preventDefault();
            nextSlideFn();
        },false);
        // $prevBtn[3].addEventListener('click',prevSlideFn, false);
        $prevBtn[3].addEventListener('click',function(e){
            e.preventDefault();
            prevSlideFn();
        },false);
    }
};

slide.init();