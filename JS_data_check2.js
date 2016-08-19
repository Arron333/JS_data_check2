<!DOCTYPE html>
<html>
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
<style>
input.ng-invalid {
    background-color: lightblue;
}
</style>
<body>

<form ng-app="" name="myForm">
    Enter your name:
    <input name="myName" ng-model="myText" required>
</form>

<p>Edit the text field and it will get/lose classes according to the status.</p>
<p><b>Note:</b> A text field with the "required" attribute is not valid when it is empty.</p>

</body>
</html>
