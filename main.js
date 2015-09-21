var slFileManager;
console.log(slFileManager);
var test = "test";
$(function() {
    console.log("Main");
    $file_viewer = $("#file_contents");
    $file_viewer.val("").parent().hide();
    $file_list = $("#file_list");
    
    $image_preview = $("#image_preview");
    $image_preview.attr("src", "").parent().hide();
    $("#file_input").on("change", function(evt) {
        var zip_file = evt.target.files[0];
        slFileManager = new StarLogoZipManager(zip_file, function(error) {
            $("#file_title").html(zip_file.name);
            $("#file_error").html(error);
        });
        console.log("slFileManager Set");
    });
    
//    var display_file = function(selected_file_name) {
//        $file_viewer.val("").parent().hide();
//        $image_preview.attr("src", "").parent().hide();
//        var extension = slFileManager.re.exec(selected_file_name)[1];
//    
//        if (extension.toLowerCase() == "png" || extension.toLowerCase() == "jpg" || extension.toLowerCase() == "jpeg")
//        {
//            $image_preview.attr("src", "data:image/png;base64,"+ all_files[selected_file_name]);
//            $image_preview.parent().fadeIn();
//        } else {
//            // Let's just open it up in the text editor
//            $("#file_name").val(selected_file_name);
//            $("#file_contents").val(all_files[selected_file_name]).parent().fadeIn();
//        }
//    }
//    
//    $file_list.on("change", function() {
//        var selected_file_name = $(this).val();
//        display_file(selected_file_name);
//    });
//    
//    $("#save_file").on("click", function() {
//        console.log("Saving");
//        
//        // Save file name and contents
//        var old_name = $file_list.val();
//        var new_name = $("#file_name").val();
//        var new_extension = slFileManager.re.exec(new_name)[1];
//        console.log(new_extension);
//        if (allowed_extensions.indexOf(new_extension) < 0)
//        {
//            alert("File Extension Not Allowed");
//            return false;
//        }
//        
//        if (old_name != new_name)
//        {
//            all_files[new_name] = all_files[old_name];
//            delete all_files[old_name];
//            
//            // Update option in list
//            $file_list.find("option:selected").attr("value", new_name).html(new_name);
//        }
//        all_files[new_name] = $("#file_contents").val();
//        console.log(all_files[new_name]);
//    });
//    
//    $("#new_file").on("click", function() {
//        var new_file_name = Math.random().toString(36).substring(7) + ".txt";
//        all_files[new_file_name] = "";
//        $file_list.append($("<option>", {'value': new_file_name, 'text': new_file_name}));
//        $file_list.find("option").attr("selected", false);
//        $file_list.find("option[value='"+ new_file_name + "']").attr("selected", true);
//        display_file(new_file_name);
//    });
//    
//    $("#delete_file").on("click", function() {
//        if (confirm("Really delete this file from the in-memory zip?"))
//        {
//            var file_name = $file_list.val();
//            delete all_files[file_name];
//            $file_list.find("option[value='"+ file_name +"']").remove();
//            $file_viewer.val("").parent().hide();
//            $image_preview.attr("src", "").parent().hide();
//        }
//    });
//    
//    $("#export").on("click", function() {
//        slFileManager.createZip(all_files);
//    });
});