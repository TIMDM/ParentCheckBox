# ParentCheckBox Plugin
A jQuery plugin for creating depending checkboxes, whit a parent/child relation

Include the `ParentCheckBox.plugin.js` in the head of the page.

## Example:
```
<!DOCTYPE html>
<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
    <script src="src/ParentCheckBox.plugin.js"></script>
    <script>
        $( document ).ready(function() {
            $("#elementTwo").parentCheckBox("#elementOne");
            $("#elementThree").parentCheckBox("#elementTwo");
        });
    </script>
</head>
<body>
    <h1>Example</h1>

    <input type="checkbox" name="test-1" id="elementOne" /><label for="elementOne">Element 1</label><br />
    <input type="checkbox" name="test-2" id="elementTwo" /><label for="elementTwo">Element 2</label><br />
    <input type="checkbox" name="test-3" id="elementThree" /><label for="elementThree">Element 3</label>
</body>
</html>
```
The plugin must be added to the child and add join the parent in the parameter. `$(child).parentCheckBox(parent)`

## Options
| Option        | Default | Description |
| ------------- | ------------- | ------------- |
| parentElement  | null  | The id of the parent as string |
| mandatory  | true  | If the link is mandatory |
