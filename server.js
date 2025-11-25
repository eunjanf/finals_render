const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use('/img', express.static(__dirname + '/img'));

app.get('/', (req, res) => {
  res.send(`<!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Personal Info</title>
    <style>
      body { margin:0; font-family: Inter, Roboto, Arial, sans-serif; }

      .hero {
        min-height:100vh;
        display:flex;
        align-items:center;
        justify-content:space-between;
        padding:60px;
        background: url('/img/bg.jpg') center/cover no-repeat;
        color: #fff;
      }

      .content { max-width: 58%; }
      h1 { font-size:48px; margin:0 0 20px 0; line-height:1.05; }
      .card { background: rgba(255,255,255,0.08); padding:18px 22px; border-radius:12px; display:inline-block; margin-top:12px }
      .meta { font-weight:700; font-size:18px }
      .quote { margin-top:18px; font-style:italic; opacity:0.95 }

      
      .portrait {
        max-width:100%;  
        border: none;
        padding: 0;
        background: none;
        border-radius: 0;
        box-shadow: none;
      }

      @media (max-width:1500px){
        .hero{flex-direction:column; text-align:center}
        .content{max-width:100%}
        .portrait{max-width:80%; margin-top:28px} 
      }
    </style>
  </head>
  <body>
    <section class="hero">
      <div class="content">
        <h1>Fernandez, Eunice Janine M.</h1>
        <div class="card">
          <div class="meta">Class section: NT-4101</div>
          <div class="quote">“Don't do unto others what you don't want done unto you.” - Confucius</div>
        </div>
      </div>

      <div>
        <img class="portrait" src="/img/1.png" alt="portrait" />
      </div>
    </section>
  </body>
  </html>`);
});


app.listen(PORT, () =>
  console.log("Server running on http://localhost:" + PORT)
);
