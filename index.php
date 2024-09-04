<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Galeria zdjęć</title>
</head>
<body>
    <div id="gallery">
        <?php
        $dir = 'images/';  // Ścieżka do folderu ze zdjęciami
        $images = array_diff(scandir($dir), array('..', '.'));  // Pobierz listę plików w folderze

        foreach($images as $image) {
            if (preg_match('/\.(jpg|jpeg|png|gif)$/i', $image)) {
                echo "<img src='$dir$image' alt='Zdjęcie' style='max-width: 200px; margin: 10px;'>";
            }
        }
        ?>
    </div>
</body>
</html>

