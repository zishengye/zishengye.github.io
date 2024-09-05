<!DOCTYPE html>
<html lang="eu">

<body>
    <div id="header-placeholder"></div>

    <div id="research header" class="topnav">
        <a href="index.md">Home</a>
        <a href="research.md">Research</a>
        <a href="publications.md">Publications</a>
        <a class="active" href="nodecloud.md">NodeCloud</a>
        <div class="topnav-right">
            <a href="https://scholar.google.com/citations?user=s1i_KkgAAAAJ&hl=en">Google Scholar</a>
            <a href="contact.md">Contact</a>
        </div>
    </div>

    <!-- JavaScript to load the header -->
    <script>
        fetch('header.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('header-placeholder').innerHTML = data;
            });
    </script>
</body>

</html>