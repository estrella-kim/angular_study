### angularjs를 이용한 간단한 todo app 만들기
 1. 분류
    > [필터]
        <hr/>
           - all : 모든 할일 리스트를 확인할 수 있는 필터
             - active : 앞으로 수행해야할 할일  
          - done : 끝낸 할일 
              <hr/> 
                <br/>       
         [입력폼] 
        <br/>
             - 할일 리스트를 작성하는 공간 enter를 누르면 list에 등재된다.
    >
      
  2. 기능 
    <hr/>
    입력을 하면, all 리스트에 등재된다. 
    모든 필터에서는 각 리스트에 대해 삭제할 수 있다.
   all리스트에서 active리스트를 done으로 옮길 수 있다.
   active리스트에서 done으로  옮길 수 있다.
   done리스트에서도 active리스트로 옮길 수 있다.
   active리스트, done리스트에서 옮겨진 항목들, 삭제된 항목들은 all리스트에 반영된다.
   all 리스트는 등재된 순으로 정렬되어 있다. 
   페이지를 초기화해도 목록은 존재해야한다. 
       
            