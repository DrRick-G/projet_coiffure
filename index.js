const express =require("express"); 
const app = express();

app.set('views','./views');
app.set('view engine','ejs');

app.use('/public',express.static('public'));

app.get('/',function(req,res){
    res.render('index')
})
app.get('/about',function(req,res){
    res.render('about')
})
app.get('/services',function(req,res){
    res.render('services')
})
app.get('/barber-shop',function(req,res){
    res.render('barber-shop')
})
app.get('/blog',function(req,res){
    res.render('blog')
})
app.get('/contact',function(req,res){
    res.render('contact')
})
app.get('/single',function(req,res){
    res.render('single')
})


app.listen(process.env.PORT || 3000) 
   