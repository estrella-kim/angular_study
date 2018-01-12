angular.module('todo', [])
.controller('todoCtrl', function todoCtrl($scope){
    //모든 목록
    $scope.checkLists = {
        all : ['go'],
        active : ['string', 'test'],
        done : ['done']
    };

    $scope.newList = '';
    $scope.listsTitle = 'all';
    localStorage.setItem('title', '');


    //필터링
    $scope.filterLists = function (standard) {
        $scope.listsTitle = standard;
    }
    console.log(localStorage);

    //등록
    $scope.createList = function () {
        localStorage.title = $scope.newList;
        $scope.checkLists.all.push($scope.newList);
        $scope.checkLists.active.push($scope.newList);
        $scope.newList = '';
    }
    //카드 이동
    $scope.moveCard = function (index) {
       /* var list = $scope.lists[index];
        if($scope.listsTitle == 'active') {
            $scope.checkLists.done.push(list);
            $scope.lists.splice(index, 1);
        }
        if($scope.listsTitle == 'done'){
            $scope.checkLists.active.push(list);
            $scope.lists.splice(index, 1);
        }*/

    }


    //삭제
    $scope.deleteList = function(index) {
        // $scope.lists.splice(index, 1);
    }



} )
