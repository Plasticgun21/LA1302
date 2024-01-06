* {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
}
body{
    background: #001e4d;
}
.app{
    background: #fff;
    width: 90%;
    max-width: 600px;
    margin: 100px auto 0;
    border-radius: 10px;
    padding: 30px;
}
.app h1{
    font-size: 25px;
    color: #001e4d;
    font-weight: 600;
    border-bottom: 1px solid #333;
    padding-bottom: 33px;
}
.quiz{
    padding: 20px 0;
}
.quiz h2{
    font-size: 18px;
    color: #001e4d;
    font-weight: 600;

}
.btn{
    background: #fff;
    color: 222;
    font-weight: 500;
    width: 100%;
    border: 1px solid #222;
    padding: 10px;
    margin: 10px 0;
    text-align: left;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s;
}
.btn:hover:not([disabled]){
    background: #222;
    color: #fff;
}
.btn:disabled{
    cursor: no-drop;
}
#next-btn{
    background: #001e4d;
    color: #fff;
    font-weight: 500;
    width: 150px;
    border: 0;
    padding: 10px;
    margin: 20px auto 0;
    border-radius: 4px;
    cursor: pointer;
    display: none;
}
.correct{
    background: #9aeabc;
}
.incorrect{
    background: #ff9393;
}

header {
    background-color: #001e4d;
    padding: 20px 0;
}

nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

nav li {
    display: inline-block;
    margin-right: 20px;
}

nav a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
}

nav a:hover {
    color: #ff8800; 
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

main {
    background-color: #fff; 
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
    
}

h2 {
    text-align: center;
    color: #333;
}
p{
    text-align: center;
}
