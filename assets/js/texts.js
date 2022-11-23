const header_2 = ["Sobre", "About"];
const header_3 = ["Habilidades", "Skills"];
const header_4 = ["Serviços", "Services"];
const header_5 = ["Contato", "Contact"];

const home_title = ["Olá, sou Nicollas!!!", "Hi, my name is Nicollas!!!"];
const home_subtitle = ["Desenvolvedor FullStack.", "FullStack Developer."];
const home_description = ["Desenvolvedor web júnior com experiência em algoritmos, clean code e matedologias ágeis.", "Junior Web Developer with experience in algorithms, clean code and fast methods."];
const home_btn = ["Contate-me", "Contact-me"];
const home_scroll = ["Rolar para baixo", "Scroll down"];

const about_title = ["Sobre mim", "About me"];
const about_subtitle = ["Minha apresentação", "My presentation"];
const about_description = [
    "Desenvolvedor web desde 2018 e atuando no mercado desde 2021." + 
    "Trabalhando em todas as partes do processo da construção de plataformas ERP para grandes empresas.",
    "Web developer since 2018 and working since 2021." + 
    "Working in all parts of building ERP platforms for huge companies."];
const about_info_1 = ["Anos <br> de experiência.", "Years <br> of experience."];
const about_info_2 = ["Projetos reais <br> em que atuei.", "Real projects <br> that I participated."];
const about_info_3 = ["Empresas <br> em que trabalhei.", "Companies <br> that I worked."];
const about_cv = ["Baixar CV", "Download resume"];

const skills_title_1 = ["Habilidades", "Skills"];
const skills_subtitle_1 = ["Meu nível técnico", "My technical level"];
const skills_info_title_1 = ["Frontend", "Frontend"];
const skills_info_subtitle_1 = ["Mais de 2 anos", "More than 2 years"];
const skills_info_title_2 = ["Backend", "Backend"];
const skills_info_subtitle_2 = ["Mais de 2 anos", "More than 2 years"];
const skills_info_title_3 = ["Idiomas", "Languanges"];
const skills_info_subtitle_3 = ["Mais de 10 anos", "More than 10 years"];

const qualidication_title_1 = ["Qualificações", "Qualifications"];
const qualification_subtitle_1 = ["Minha jornada", "My journey"];
const qualification_time = ["2020 - Cursando", "2020 - In progress"];
const qualification_info_title_1 = ["Médio técnico em informática", "Tech Highschool"];
const qualification_info_subtitle_1 = ["Brasil - CEFET/RJ", "Brazil - CEFET/RJ"]
const qualification_info_title_2 = ["Sisitemas de informação", "Informational Systems"];
const qualification_info_subtitle_2 = ["Brasil - CEFET/RJ", "Brazil - CEFET/RJ"]
const qualification_info_title_3 = ["Desenvolvedor Bolsista", "Scholar developer"];
const qualification_info_subtitle_3 = ["Brasil - CEFET/RJ", "Brazil - CEFET/RJ"]
const qualification_info_title_4 = ["Estágiário > Dev. Trainee", "Internship > Trainee Dev."];
const qualification_info_subtitle_4 = ["BendingBits - Revendus", "BendingBits - Revendus"]
const qualification_info_title_5 = ["Dev. Trainee > Dev. Junior", "Trainee Dev. > Junior Dev."];
const qualification_info_subtitle_5 = ["Viceri Seidor", "Viceri Seidor"]
const qualification_time_2 = ["2022 - Trabalho atual", "2022 - Current Job"];

const services_title_1 = ["Serviços", "Services"];
const services_subtitle_1 = ["O que eu ofereço", "What do I offer"];
const services_frontend_title = ["Desenvolvimento <br> FrontEnd", "FrontEnd <br> Development"];
const services_frontend_title_modal = ["Desenvolvimento <br> FrontEnd", "FrontEnd <br> Development"];
const services_front_item_1 = ["Criar e replicar telas", "Create and reply screens"];
const services_front_item_2 = ["Desenho de UI", "UI Design"];
const services_front_item_3 = ["Lógica de Js para interações e requisições", "Js logics for interections and requisitions"];
const services_backend_title = ["Desenvolvimento <br> Backend", "Backend <br> Development"];
const services_backend_title_modal = ["Desenvolvimento <br> Backend", "Backend <br> Development"];
const services_back_item_1 = ["Criar APIs REST", "Create REST APIs"];
const services_back_item_2 = ["Algoritimos de qualidade", "Quality algorithms"];
const services_back_item_3 = ["Testes unitários", "Unit tests"];
const services_back_item_4 = ["Consultas de banco de dados / Procedures", "Database searchs / procedures development"];

const contact_title_1 = ["Contate-me", "Contact-me"];
const contact_subtitle_1 = ["Entre em contato", "Get in contact"];
const contact_item_1 = ["Telefone", "Phone"];
const contact_item_2 = ["Email", "Email"];
const contact_item_3 = ["Localização", "Location"];
const contact_label_1 = ["Nome", "Name"];
const contact_label_2 = ["Email", "Email"];
const contact_label_3 = ["Projeto", "Project"];
const contact_label_4 = ["Mensagem", "Message"];
const contact_btn = ["Enviar mensagem", "Send Message"];

const footer_subtitle = ["Desenvolvedor FullStack", "FullStack developer"];
const footer_link_1 = ["Serviços", "Services"];
const footer_link_2 = ["Portifólio", "Portfolio"];
const footer_link_3 = ["Contato", "Contact"];


function loadText(x)
{
    let selected = document.querySelector(".selected-languange");

    if(selected.classList.contains("en-usa"))
        x = 1

    //header
    document.querySelector("#header_2").innerHTML = header_2[x];
    document.querySelector("#header_3").innerHTML = header_3[x];
    document.querySelector("#header_4").innerHTML = header_4[x];
    document.querySelector("#header_5").innerHTML = header_5[x];

    //home
    document.querySelector('.home_title').innerHTML = home_title[x];
    document.querySelector('.home_subtitle').innerHTML = home_subtitle[x];
    document.querySelector('.home_description').innerHTML = home_description[x];
    document.querySelector('.home_btn').innerHTML = home_btn[x];
    document.querySelector('.home_scroll-name').innerHTML = home_scroll[x];

    //about
    document.querySelector('.about_title').innerHTML = about_title[x];
    document.querySelector('.about_subtitle').innerHTML = about_subtitle[x];
    document.querySelector('.about_description').innerHTML = about_description[x];
    document.querySelector('.about_info_1').innerHTML = about_info_1[x];
    document.querySelector('.about_info_2').innerHTML = about_info_2[x];
    document.querySelector('.about_info_3').innerHTML = about_info_3[x];
    document.querySelector('.about_cv').innerHTML = about_cv[x];

    //Skills
    document.querySelector('.skills_title_1').innerHTML = skills_title_1[x];
    document.querySelector('.skills_subtitle_1').innerHTML = skills_subtitle_1[x];
    document.querySelector('.skills_info_title_1').innerHTML = skills_info_title_1[x];
    document.querySelector('.skills_info_subtitle_1').innerHTML = skills_info_subtitle_1[x];
    document.querySelector('.skills_info_title_2').innerHTML = skills_info_title_2[x];
    document.querySelector('.skills_info_subtitle_2').innerHTML = skills_info_subtitle_2[x];
    document.querySelector('.skills_info_title_3').innerHTML = skills_info_title_3[x];
    document.querySelector('.skills_info_subtitle_3').innerHTML = skills_info_subtitle_3[x];

    //Qualifications
    document.querySelector('.qualidication_title_1').innerHTML = qualidication_title_1[x];
    document.querySelector('.qualification_subtitle_1').innerHTML = qualification_subtitle_1[x];
    document.querySelector('.qualification_time').innerHTML = qualification_time[x];
    document.querySelector('.qualification_info_title_1').innerHTML = qualification_info_title_1[x];
    document.querySelector('.qualification_info_subtitle_1').innerHTML = qualification_info_subtitle_1[x];
    document.querySelector('.qualification_info_title_2').innerHTML = qualification_info_title_2[x];
    document.querySelector('.qualification_info_subtitle_2').innerHTML = qualification_info_subtitle_2[x];
    document.querySelector('.qualification_info_title_3').innerHTML = qualification_info_title_3[x];
    document.querySelector('.qualification_info_subtitle_3').innerHTML = qualification_info_subtitle_3[x];
    document.querySelector('.qualification_info_title_4').innerHTML = qualification_info_title_4[x];
    document.querySelector('.qualification_info_subtitle_4').innerHTML = qualification_info_subtitle_4[x];
    document.querySelector('.qualification_info_title_5').innerHTML = qualification_info_title_5[x];
    document.querySelector('.qualification_info_subtitle_5').innerHTML = qualification_info_subtitle_5[x];
    document.querySelector('.qualification_time_2').innerHTML = qualification_time_2[x];

    //Services
    document.querySelector('.services_title_1').innerHTML = services_title_1[x];
    document.querySelector('.services_subtitle_1').innerHTML = services_subtitle_1[x];
    document.querySelector('.services_frontend_title').innerHTML = services_frontend_title[x];
    document.querySelector('.services_frontend_title_modal').innerHTML = services_frontend_title_modal[x];
    document.querySelector('.services_front_item_1').innerHTML = services_front_item_1[x];
    document.querySelector('.services_front_item_2').innerHTML = services_front_item_2[x];
    document.querySelector('.services_front_item_3').innerHTML = services_front_item_3[x];
    document.querySelector('.services_backend_title').innerHTML = services_backend_title[x];
    document.querySelector('.services_backend_title_modal').innerHTML = services_backend_title_modal[x];
    document.querySelector('.services_back_item_1').innerHTML = services_back_item_1[x];
    document.querySelector('.services_back_item_2').innerHTML = services_back_item_2[x];
    document.querySelector('.services_back_item_3').innerHTML = services_back_item_3[x];
    document.querySelector('.services_back_item_4').innerHTML = services_back_item_4[x];

    //Contact
    document.querySelector('.contact_title_1').innerHTML = contact_title_1[x];
    document.querySelector('.contact_subtitle_1').innerHTML = contact_subtitle_1[x];
    document.querySelector('.contact_item_1').innerHTML = contact_item_1[x];
    document.querySelector('.contact_item_2').innerHTML = contact_item_2[x];
    document.querySelector('.contact_item_3').innerHTML = contact_item_3[x];

    //Footer
    document.querySelector('.footer_subtitle').innerHTML = footer_subtitle[x];
    document.querySelector('.footer_link_1').innerHTML = footer_link_1[x];
    document.querySelector('.footer_link_2').innerHTML = footer_link_2[x];
    document.querySelector('.footer_link_3').innerHTML = footer_link_3[x];

}

function selectPt()
{
    document.querySelector('.pt-br').classList.add('selected-languange');
    document.querySelector('.en-usa').classList.remove('selected-languange');
    loadText(0);
}

function selectEn()
{
    loadText(1);
    document.querySelector('.pt-br').classList.remove('selected-languange');
    document.querySelector('.en-usa').classList.add('selected-languange');
}
