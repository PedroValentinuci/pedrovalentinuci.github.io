var films = ["https://m.media-amazon.com/images/M/MV5BMTcwNzAxMDU1M15BMl5BanBnXkFtZTgwNDE2NTU1MTE@._V1_UX182_CR0,0,182,268_AL_.jpg", 
"https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UX182_CR0,0,182,268_AL_.jpg", 
"https://m.media-amazon.com/images/M/MV5BMTQ1OTU0ODcxMV5BMl5BanBnXkFtZTcwOTMxNTUwOA@@._V1_UX182_CR0,0,182,268_AL_.jpg"]

var choice = prompt("Escolha um filme ou 1 para ver todo o catalogo")

if (choice == "1") {
    for (let index = 0; index < films.length; index++) {
        document.write("<img src=" + films[index] + ">")
    }
} else if (choice == "Anjos da lei") {
    document.write("<img src=" + films[0] + ">")
    document.write("<br><br>" + "<p>" + "Não tem nas plataformas digitais" + "</p>")
} else if (choice == "Bastardos Inglórios") {
    document.write("<img src=" + films[1] + ">")
    document.write("<br><br>" + "<a href='https://www.netflix.com/title/70108777?s=a&trkid=13747225&t=cp' target='_blank'>" + "Clique aqui para assistir" + "</a>")
} else if (choice == "Ted") {
    document.write("<img src=" + films[2] + ">")
    document.write("<br><br>" + "<a href='https://www.netflix.com/title/70218756?s=a&trkid=13747225&t=cp' target='_blank'>" + "Clique aqui para assistir" + "</a>")
}