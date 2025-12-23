$source = "G:\Users\Windows\Downloads\codes\realityvisionarypursuits\src\data\E.A.R.T.H. Accord.docx"
$destination = "G:\Users\Windows\Downloads\codes\realityvisionarypursuits\src\data\The Economic Singularity.docx"
Copy-Item -Path $source -Destination $destination -Force
Write-Host "Created: $destination"
