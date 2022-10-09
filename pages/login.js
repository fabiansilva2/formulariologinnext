import Head from "next/head";

function Login() {

    return (

        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta name="robots" content="index, follow" />
                <meta name="description" content="Tela Login" />
                <meta name="author" content="Fabian Silva" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="stylesheet" href="styles/global.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
                <script src="https://kit.fontawesome.com/48590567c3.js" crossorigin="anonymous"></script>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
                <title>Fomulario de Login</title>
            </Head>
            <main class="container">
                <h2>Login</h2>
                <form acion="" class="action">
                    <div class="input-field">
                        <input type="text" class="text" name="username" id="username" placeholder="Usuario" />
                        <div class="underline"></div>
                    </div>
                    <div class="input-field">
                        <input type="password" class="password" name="password" id="password" placeholder="Senha" />
                        <div class="underline"></div>
                    </div>
                    <input type="submit" value="Continue" />
                </form>

                <div class="footer">
                    <p class="tituloredesocial">Conecte-se pelas redes sociais</p>
                    <div class="redesocial">
                        <div class="redesocial google">
                            <a href="#">
                                <i class="fab fa-google"></i>
                                Google
                            </a>
                        </div>
                        <div class="redesocial facebook">
                            <a href="#">
                                <i class="fab fa-facebook"></i>
                                Facebook
                            </a>
                        </div>
                        <div class="redesocial linkedin">
                            <a href="#">
                                <i class="fab fa-linkedin"></i>
                                Linkedin
                            </a>
                        </div>
                        <div class="redesocial github">
                            <a href="#">
                                <i class="fab fa-github"></i>
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>

            </main>
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>

        </div>

    )
}

export default Login;