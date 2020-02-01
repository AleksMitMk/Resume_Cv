$(function () {

    let billArr = ['bill1', 'bill2', 'bill3', 'bill4'];
    let laikaArr = ['Laika1', 'Laika2', 'Laika3', 'Laika4', 'Laika5', 'Laika6'];
    let hoveredText = [{
        bill_01: 'Make sure that your title matches your skills. E.g., if you’re an entry level PHP developer, don’t say that you’re a PHP Expert. Skip the abbreviations and titles – keep it short and modest.',
        bill_02: 'Be concise and easy to understand. Don’t use overdone motivational quotes about work ethics and inspiration, try to make the ‘about’ section as personal and as reflective of you as possible.',
        bill_03: 'Use the new “Open for business” feature. State your area of expertise and industry, to let recruiters know they can reach you.  Tip: Don’t write in things that you wouldn’t like to happen. For example, if you say you work good under pressure, employers might have an ace up their sleeve when stacking a lot of work with a short deadline, because you said so. Value your skills and free time accordingly.',
        bill_04: 'Explain every work experience you’ve had in detail – what were your obligations and tasks, what was your job title, which technologies and tools did you use etc. ',
        bill_11: 'Don’t be shy on listing experience that isn’t connected to your current profession. Volunteering at a local community center, summer jobs, projects you were a part of, pro bono work you did to improve your skills and gain experience – everything counts. It serves as proof to your work ethics and adaptability. Tip: If you have no experience and education to build up your profile, do some pro bono work or volunteer. You can help someone, and at the same time enrich your portfolio.  ',
        bill_21: ' Under education, list all the formal and non-formal education you have, with focus on the education that is relevant to your current title. For example, if you put Brainster Digital Marketing Academy as an education, list all the modules and projects you have worked on. Make sure to list your major and bachelor/master/doctor thesis subject under the university education.     ',
        bill_31: 'Tip: Add connections from the same field of work as you; even people you don’t know personally. That way, recruiters have a bigger chance of coming across your profile. Put in the skills you are most experienced in, so you can be endorsed from other people.  Tip: Ask friends and coworkers to endorse you.  List all your relevant accomplishments. Don’t say you have a black belt in karate, but mention an award or relevant campaign. ',
        laika_01: 'Tip: Make sure you leave an email that you check regularly ',

        laika_02: 'Link all your social media and portfolios you want companies and recruiters to be able to see (LinkedIn, Facebook, etc.)  ',
        laika_12: 'Be realistic when choosing the reason why you have a portfolio on Laika. This will help recruiters know whether you are suitable for the position on the long run. ',
        laika_22: 'You can only pick 1 industry out of the given 9 (Software Engineering, Design, Marketing and Communication, Data Science, IT and Sysadmin, Sales and Business Development, HR and Recruitment, Project and Product Management, Customer Support). ',
        laika_24: 'You can pick up to 5 options in the Expertise field. Make sure your choices are realistic and they truly reflect the skills you are most confident in. *Choose up to 8 technologies, but make sure you really know their ins and outs. The matching algorithm connects you to companies whose job openings have precise technologies listed.',
        laika_23: 'Work experience is not mandatory, but it helps companies know what kind of experience and in which industry you have.',
        laika_21: ' Under education, list all the formal and non-formal education you have, with focus on the education that is relevant to your current title. For example, if you put Brainster Digital Marketing Academy as an education, list all the modules and projects you have worked on. Make sure to list your major and bachelor/master/doctor thesis subject under the university education.     ',
        laika_31: 'Education is also not mandatory, but it adds weight to your portfolio if you have any academic knowledge.',
        laika_32: ' Please be honest when selecting the level of your experience ',
        laika_41: 'You can choose out of four locations, or multiple ',
        laika_42: 'You can choose between a job in office, remote, or both. ',
        laika_43: 'Let the companies know what is your current job title ',
        laika_44: 'Be honest about the motivation behind looking for a new opportunity. This will help us and the companies searching for new employees.',
        laika_51: 'Please be honest when selecting the level of your experience ',
        laika_52: 'Select your desired salary. Don’t try to be too accessible, but please be realistic – make sure you desired salary is in accordance to your experience. ',
        laika_53: 'You can choose multiple choices for your desired job plan  ',

        Web_Development_Resume_one: 'Your photo should be professional. It’s better to send a CV  without a photo, that with one that makes you seem unserious. ',
        Web_Development_Resume_two: 'Tailor the CV according to job you’re applying for.  There is no ‘one size fits all’ CV – so always adapt it before applying to a job.  ',
        Web_Development_Resume_three: 'Write a short intro that truly represents you –not cheesy quotes,  but something you truly believe in. Don’t put overused buzzwords, describe yourself and your capabilities with your own vocabulary.  ',
        Web_Development_Resume_four: 'Write your previous ​job experience​ and if you’re currently working, your current job titles. Explain your responsibilities and projects and list the tech stack and products/projects you worked on. If you were working in a team, let the recruiter know what your role was.',
        Web_Development_Resume_five: 'Email, phone number and date of birth are the practical part of the assembly of a CV. Enter your professional email address, preferably on Gmail. Your city of living is an information that interests your potential employers. But don’t leave your home address. Leave a link to your LinkedIn profile. If you have proof of your previous job experiences online, link that too. ',
        Web_Development_Resume_six: ' List all the ​skills, tools and technologies​ that you know well.    ',
        Web_Development_Resume_seven: 'Education​ is an important section – but be sure to select only what is relevant to the job you’re applying for. Write about your university degrees, relevant courses and if you have any publications, but skip the high and elementary school. ',
        Web_Development_Resume_eight: 'Tip: Highlight the key achievements you have presented on your CV so the hiring manager can catch them very quickly.',
        Web_Development_Resume_nine: '  Showcase your tech stack​. List the stack under every previous project you have worked on, or showcase your projects on GitHub. The easiest way to do this is to list the stack under a previous project that you have worked on. Another way is to showcase your projects on GitHub. Dates – a time frame in which you have been on a certain job title. If you are still working there, leave a hyphen ( - ). Leave your most recent experience first, and the oldest ones last.    ',
        Web_Development_Resume_ten: ' All languages, even those you don’t speak fluently, can help you get a certain position. It’s good to use expressions such as “fluent in”, “speaking level of”, “native language” and similar.  ',

        Data_Scientist_Resume_one: 'Put a photo made with a good camera. It’s better to send a CV without a photo, if you were planning on cropping yourself from a group photo from a dinner with friends, or a selfie in you room.  ',
        Data_Scientist_Resume_two: 'Write your previous ​job experience,​ and if you’re currently working, your current job title. Explain your responsibilities and projects and list the tech stack and products/projects you worked on. If you were working in a team, let the recruiter know what your role was.  Dates – a time frame in which you have been on a certain job title. If you are still working there, leave a hyphen ( - ). Leave your most recent experience first, and the oldest ones last. We want to enable the reader to see what he needs to about your experience right away. Describe every job title with a few words about your most relevant experiences connected to the title you’re applying for. ',
        Data_Scientist_Resume_three: 'Let the recruiter know about your ​education​, but only write the important parts – skip the high school and elementary, stick to the university degrees and courses relevant to the job you’re applying for.  ',
        Data_Scientist_Resume_four: 'Immediately should be your ​Projects/Publications​ section. In the tech industry, the focus should be on what you have created. Include data analysis projects, machine learning projects, and if possible, published scientific articles or tutorials. Pick projects with relevance and connection to the job you’re applying for. They should demonstrate your technical skills and how they are applicable to solving real problems.',
        Data_Scientist_Resume_five: 'Be specific about the skills, tech and tools you used, and what your role was if you’re listing group projects. Specify coding languages, libraries etc.  Make sure you use keywords that will put the focus on your best skills. If an HR/recruiter just scans your CV, they will catch their attention. Highlight terms like “Python” or “Machine learning”. Space is limited, so don’t waste t on soft skills like leadership or communication. ',
        Data_Scientist_Resume_six: 'It might require more work and research, but ​customize your CV​ according to the position you are applying for. Add small details in some places in accordance to the job description.  ',
        Data_Scientist_Resume_seven: 'All languages, even those you don’t speak fluently, can help you get a certain position. It’s good to use expressions such as “fluent in”, “speaking level of”, “native language” and similar. ',
        Data_Scientist_Resume_eight: 'Don’t be afraid to include a ​“Informal education”​ where you can list all the courses, conferences, workshops and webinars that you used to teach yourself about digital marketing. Don’t include everything – just the education that is relevant and necessary for the position you are applying for. ',
        Data_Scientist_Resume_nine: 'Email, phone number and date of birth are the practical part of the assembly of a CV. Enter your professional email address, preferably on Gmail. Your city of living is an information that interests your potential employers. Don’t leave your home address ',

        Digital_Marketing_Resume_one: 'Put a photo that looks professional – made with a good camera and showing you in a warm light. It’s better to send a CV without a photo, than a photo that makes you seem unprofessional.',
        Digital_Marketing_Resume_two: 'Know your unique value proposition and communicate it effectively.​ You need a personal tagline that will help you stand out from everyone else. This line should be the first impression the hiring manager will get from you. E.g. if you’re a Content Writer, don’t just say ‘’I’m a great content writer’’. Be creative and say why they should hire you to handle their content. Do your research​ in advance to create a value proposition relevant to the company you’re applying to.  ',
        Digital_Marketing_Resume_three: 'List the ​job experiences​ that are relevant to the position you’re applying for. If you’re currently working, your current job titles. Explain your responsibilities and projects and list the strategies and projects you created or worked on. Tailor your CV to the company and position you’re applying for. Highlight the keywords from the job specification on your CV. For example, if you’re applying for an e-commerce role, include keywords such as ‘’Conversion, bounce rate and Google Analytics’’.  Talk about campaigns you worked on, the budget you had, how it benefited the company etc. This will help recruiters learn how you could benefit them based on your past experience. Dates – a time frame in which you have been on a certain job title. If you are still working there, leave a hyphen ( - ). Leave your most recent experience first, and the oldest ones last. Enable the reader to see what he needs to about your experience right away. Describe every job title with a few words about your most relevant experiences connected to the title you’re applying for.   ',
        Digital_Marketing_Resume_four: 'Under education, list only the ​relevant studies and courses​, like university degree or Digital Marketing Academy. Don’t write where you went to high school. Don’t be afraid to include a “Self-Study” where you can list all the courses, conferences, workshops and webinars that you used to teach yourself about digital marketing. Don’t include everything – just the education that is relevant and necessary for the position you are applying for.',
        Digital_Marketing_Resume_five: 'Email, phone number and date of birth are the practical part of the assembly of a CV. Enter your professional email address, preferably on Gmail. Your city of living is an information that interests your potential employers. Don’t leave your home address.',
        Digital_Marketing_Resume_six: 'Analyze what your ​key skills​ are. Make sure to list the skills you can shine in from day one. Showcase all the tools and technologies you know how to use​. Everything that’s useful to a marketer: from Typeform and Canva, to Photoshop and Data Studio. Link campaigns you worked on If possible. ',
        Digital_Marketing_Resume_seven: 'Tip: Highlight the key achievements you have presented on your CV so the hiring manager can catch them very quickly. ',
        Digital_Marketing_Resume_eight: 'All languages, even those you don’t speak fluently, can help you get a certain position. It’s good to use expressions such as “fluent in”, “speaking level of”, “native language” and similar.  ',

        Graphic_Design_Resume_one: 'Put a photo in a circle frame. It should be professional – made with a good camera and showing you in a warm light. It’s better to send a CV without a photo, than with one that makes you seem unprofessional. ',
        Graphic_Design_Resume_two: 'Write a short intro that truly represents you – not a cheesy quote, but something you truly believe in. Advice:​ This builder is a great start to help you with the content of the CV, but try making it in Photoshop or Illustrator. ',
        Graphic_Design_Resume_three: 'Describe every ​job experience​ with a few words about your most relevant responsibilities and projects connected to the title you’re applying for.  Dates are a time frame in which you have been on a certain job title. If you are still working there, leave a hyphen ( - ). First write your most recent experience, and the oldest ones last. We want to enable the reader to see what he needs to about your experience right away. Templates aren’t suitable for a designer, except if you are applying to a job call that explicitly wants that format. Make it just one page, and don’t write all the projects you’ve worked on – only the ​ones relevant​ to the position. ',
        Graphic_Design_Resume_four: 'List relevant ​education​, including workshops or lectures you have visited. If you have a bachelor in Sports, and now you are applying as a designer because you finished a course, the course should be the highest in your “education” section. Don’t put in high and elementary school.  ',
        Graphic_Design_Resume_five: 'List all the ​skills, tools and technologies​ that you know well.  ',
        Graphic_Design_Resume_six: 'Email, phone number and date of birth are the practical part of the assembly of a CV. Enter your professional email address, preferably on Gmail. Your city of living is an information that interests your potential employers. Don’t leave your home address. Leave a link to your LinkedIn profile, or Behance/Dribbble/WiX. Make sure it’s clickable, and shorten it. ',

    }]

    let cvType = '';

    //On category button click, filter the category that is clicked to show
    $('.catBtn .btn').on('click', function (e) {
        $('.boxes').hide();
        $('.curriculumVitae').show();
        window.location.hash = 'curriculumVitae';

        let cvImage = e.currentTarget.parentNode.parentNode;
        let idText = cvImage.id;
        cvType = idText;
        $('#cv').attr('class', `cv ${cvType} active`)

        console.log(idText)
        $('.imageCv').html(`
                        <div class="position">
                            <img src="../images/${idText}.png" class="img img-response" alt="${idText}">
                            <div class='cVitae ${idText}_one'></div>
                            <div class='cVitae ${idText}_two'></div>
                            <div class='cVitae ${idText}_three'></div>
                            <div class='cVitae ${idText}_four'></div>
                            <div class='cVitae ${idText}_five'></div>
                            <div class='cVitae ${idText}_six'></div>
                            <div class='cVitae ${idText}_seven'></div>
                            <div class='cVitae ${idText}_eight'></div>
                            <div class='cVitae ${idText}_nine'></div>
                            <div class='cVitae ${idText}_ten'></div>
                        </div>`)
    })
    //this is in Category site on click to change the content in the field
    $('.cv .btn').on('click', function (e) {

        let div = e.target;
        let btnText = $(div).text();
        let changeId = div.parentNode.parentNode.parentNode.parentNode;
        console.log(changeId)
        $('.cv').removeClass('active');
        $(this).parent().addClass('active');

        // show and hide the content for cv, linkedIn and Laika
        if (btnText !== 'CV') {
            changeId.id = 'leftSiteLink';
            $('.vitae').parent().addClass('imgPart');
            $('.edit').hide();
            $('.download').hide();
            $('.rightSite').css({ height: '67vh', marginTop: '141px' })
            $('.vitae').removeClass('col-md-10').addClass('col-md-12')

            if (btnText == 'LINKEDIN') {
                window.location.hash = 'LinkedIn';
                $(`.Web_Development_Resume_Cv`).addClass('hideDiv');
                $(`.Digital_Marketing_Resume_Cv`).addClass('hideDiv');
                $(`.Graphic_Design_Resume_Cv`).addClass('hideDiv');
                $(`.Data_Scientist_Resume_Cv`).addClass('hideDiv');
                $('.imageCv img').hide();
                $('.imageCv div').hide();
                jQuery.each(billArr, (el, value) => {
                    $('.imageCv').append(
                        `<div class="position">
                    <img src="../images/LinkedIn/${value}.png" class="img img-response" alt="${value}"></img>
                    <div class='bill bill_${el}1'></div>
                    <div class='bill bill_${el}2'></div>
                    <div class='bill bill_${el}3'></div>
                    <div class='bill bill_${el}4'></div>
                </div>`
                    )
                })
            } else {

                $(`.Web_Development_Resume_Cv`).addClass('hideDiv');
                $(`.Digital_Marketing_Resume_Cv`).addClass('hideDiv');
                $(`.Graphic_Design_Resume_Cv`).addClass('hideDiv');
                $(`.Data_Scientist_Resume_Cv`).addClass('hideDiv');
                $('.imageCv img').hide();
                $('.imageCv div').hide();
                jQuery.each(laikaArr, (el, value) => {
                    $('.imageCv').append(
                        `<div class="position">
                    <img src="../images/Laika/${value}.png" class="img img-response" alt="${value}"></img>
                    <div class='laika laika_${el}1'></div>
                    <div class='laika laika_${el}2'></div>
                    <div class='laika laika_${el}3'></div>
                    <div class='laika laika_${el}4'></div>
                </div>`
                    )
                })
            }
        } else {
            window.location.hash = 'curriculumVitae';
            changeId.id = 'leftSite';
            $(`.Web_Development_Resume_Cv`).addClass('hideDiv');
            $(`.Digital_Marketing_Resume_Cv`).addClass('hideDiv');
            $(`.Graphic_Design_Resume_Cv`).addClass('hideDiv');
            $(`.Data_Scientist_Resume_Cv`).addClass('hideDiv');
            $('.vitae').parent().removeClass('imgPart');
            $('.edit').show();
            $('.download').show();
            $('.rightSite').css({ height: '81vh', marginTop: '40px' })
            $('.vitae').removeClass('col-md-12').addClass('col-md-10')
            $('.imageCv img').hide();
            $('.imageCv div').hide();

            console.log(cvType)
            $('.imageCv').html(`
        <div class="position">
                            <img src="../images/${cvType}.png" class="img img-response" alt="${cvType}">
                            <div class='cVitae ${cvType}_one'></div>
                            <div class='cVitae ${cvType}_two'></div>
                            <div class='cVitae ${cvType}_three'></div>
                            <div class='cVitae ${cvType}_four'></div>
                            <div class='cVitae ${cvType}_five'></div>
                            <div class='cVitae ${cvType}_six'></div>
                            <div class='cVitae ${cvType}_seven'></div>
                            <div class='cVitae ${cvType}_eight'></div>
                            <div class='cVitae ${cvType}_nine'></div>
                            <div class='cVitae ${cvType}_ten'></div>
                        </div>`
            )
        }
    })
    //Text Field on Resumes, LinkedIn, Laika Image hover parts 
    $(document).on('mouseenter', '.bill, .laika, .cVitae',

        function () {
            let divClass = $(this).attr("class").split(' ')[1].toString();
            let className = hoveredText.find(el => el)

            $('.rightSite h4').text(className[divClass])
        })
    //Text Field on hover editableResumes
    $(document).on('mouseenter', '.editableResume',

        function () {
            let divId = $(this).attr("id").toString();
            let className = hoveredText.find(el => el)

            $('.rightSite h4').text(className[divId])
        })

    //Editable Cv parts


    // For Editable CV on click

    //Info on click to search class and hide-show the elements
    $(document).on('click', '.info', function (e) {

        let div = e.target;
        let divClass = $(div).attr("class").split(' ')[1].toString()

        let divId = $(div).attr('id');
        console.log(divClass)
        if (divId == 'tasks' || divId == 'tasksEducationWeb' || divId == 'tasksEduGraphic' || divId == 'tasksProjectWeb' || divId == 'tasksDigital' || divId == 'tasksProjectDigital' || divId == 'tasksEduDigital' || divId == 'tasksEduData' || divId == 'tasksProjectData' || divId == 'tasksData') {
            $(`.` + `${divClass}` + `Ul`).toggle();
            $(`.` + `${divClass}` + `Ul` + ` ` + `input`).show();
        } else if (divClass == 'info') {
            console.log('info div clicked')
        } else {
            var groupname = $(`.` + `${divClass}`).html();
            $(`#` + `${divClass}`).hide();
            $(`.` + `${divClass}` + `Inp`).show();
            $(`.` + `${divClass}` + `Inp`).focus();
            $(`.` + `${divClass}` + `Inp`).val('');


        }
        $(`.` + `${divClass}` + `Inp`).focusout(function () {
            if ($(`.` + `${divClass}` + `Inp`).val() == '') {
                $(`.` + `${divClass}` + `Inp`).val(groupname);
                $(`.` + `${divClass}`).html($(`.` + `${divClass}` + `Inp`).val());
                $(`.` + `${divClass}` + `Inp`).hide();
                $(`.` + `${divClass}`).show();
            }
            $(`.` + `${divClass}`).html($(`.` + `${divClass}` + `Inp`).val());
            $(`.` + `${divClass}` + `Inp`).hide();
            $(`.` + `${divClass}`).show();
        });

    });

    //On Mouseover on the editable parts to show the pencile from the right site that means is editable text

    $(document).on('mouseover', '.form-group', function () {
        $(this).append($(`<span class="spanEdit"><i class="fa fa-pencil"></i></span>`))

    });
    $(document).on('mouseout', '.form-group', function () {
        $(this).find("span").last().remove()
    });

    //On hover to show the Add button for all parts
    $(document).on('mouseover', '.allHovers', function () {
        $('#checkbox, .checkbox').show();
        $('.delAllData i').show();
        $('.addBtn, .delUlLi').show();
    });
    $(document).on('mouseout', '.allHovers', function () {
        $('#checkbox, .checkbox').hide();
        $('.delAllData i').hide();
        $('.addBtn, .delUlLi').hide();
    });
    //Input Achievements/Tasks to fill the ul lists

    $(document).on('keyup', '#tasksInp', function (e) {
        let inp = e.target;
        let inpClass = $(inp).attr("class").split(' ')[1].toString()
        let catList = $(inp).attr("class").split(' ')[2].toString()
        console.log(inpClass)
        let tasksInp = $(`.` + `${inpClass}`).val();
        if (e.keyCode === 13) {
            console.log('ace');
            $(`.` + `${inpClass}` + `Ul`).append(`<li class="ulLi${catList}" ><h5 contenteditable="true">${tasksInp}</h5><span class="delUlLi"><i class="far fa-trash-alt"></i></span></li>`)
            $(`.` + `${inpClass}`).val('');
        }
    })

    //Delete the li element
    $(document).on('click', '.fa-trash-alt', function (e) {
        let parentLi = e.target.parentNode.parentNode;
        $(parentLi).remove();
    })
    // On CLick on the delete icon to delete the box in SKILLS & COMPETENCIES

    $(document).on('click', '#spanDelete ', function (e) {
        let parentLi = e.target.parentNode.parentNode.parentNode.parentNode;
        console.log('deleted')
        $(parentLi).remove();
    })

    //Data work Experience to check if is present or not to remove the data in WORK EXPERIENCE
    $(document).on('click', 'input[type="checkbox"]', function (e) {
        let p_End = e.target;
        let p_Class = $(p_End).attr('class');
        console.log(p_Class);
        if ($(this).is(":checked")) {
            $(`#` + `${p_Class}` + `End`).hide();
            $(`#` + `${p_Class}` + `Text`).show();
            console.log('acee')
        } else {
            $(`#` + `${p_Class}` + `End`).show();
            $(`#` + `${p_Class}` + `Text`).hide();
        }
    })
    // Add new Work Experience Field  
    $('.addJob .btn').on('click', function (e) {

        let inp = e.currentTarget.parentNode;
        let btnClass = $(inp).attr("class").split(' ')[1].toString()
        console.log(btnClass)

        let id = $('.workForm').length;

        $(`.exp-position` + `` + `.` + `${btnClass}`).append(` <div class="workForm">
                                            <div class="box-title light${btnClass}"></div>
                                            <form class="experienceForm">
                                                <div class="form-group info">
                                                
                                                    <div class="h4 exp${btnClass + id} cs_title" id="exp${btnClass + id}">Title/Position</i></div>
                                                    <input type="text " class="form-control exp${btnClass + id}Inp" id="email3Inp" placeholder="Title/Position">
                                                 </div>
                                                <div class="form-group info">
                                                    <div class="h4 work${btnClass + id}" id="work${btnClass + id}">Workplace/Company</div>
                                                    <input type="text " class="form-control work${btnClass + id}Inp" id="emai2lInp" placeholder="Workplace/Company">
                                                 </div>
                                                 <div class="form-group info">
                                                    <div class="periodToogle">
                                                        <div class="period">
                                                            <div class="data_Period">
                                                            <div class="period-start">
                                                                <div class="h6 startMont${btnClass + id}" id="startMont${btnClass + id}">mm</div>
                                                                <input type="text" maxlength="2" class="form-control startMont${btnClass + id}Inp" id="startMontInp" placeholder="mm">
                                                                <div class="slash">/</div>
                                                                <div class="h6 startYear${btnClass + id}" id="startYear${btnClass + id}">yyyy</div>
                                                                <input type="text" maxlength="4" class="form-control startYear${btnClass + id}Inp" id="startYearWebInp" placeholder="yyyy">
                                                            </div>
                                                            <div class="separator"> - </div>
                                                            <div class="h6 hideDiv" id="present${btnClass + id}Text"">Present</div>
                                                            <div class="period-end" id="present${btnClass + id}End">
                                                                <div class="h6 endMont${btnClass + id}" id="endMont${btnClass + id}">mm</div>
                                                                <input type="text" maxlength="2" class="form-control endMont${btnClass + id}Inp" id="endMontInp" placeholder="mm">
                                                                <div class="slash">/</div>
                                                                <div class="h6 endYear${btnClass + id}" id="endYear${btnClass + id}">yyyy</div>
                                                                <input type="text" maxlength="4" class="form-control endYear${btnClass + id}Inp" id="endYearInp" placeholder="yyyy">
                                                            </div>
                                                            <div class="checkbox">
                                                                <div class="period-present">
                                                                    <label>
                                                                        <input type="checkbox" class="present${btnClass + id}" id="checkbox"> Present
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            </div>
                                                            <div class="form-group info">
                                                               <div class="h6 city${btnClass + id} cs_city" id="city${btnClass + id}">City, Country</div>
                                                               <input type="text" class="form-control city${btnClass + id}Inp" id="cityInp" placeholder="City, Country">
                                                            </div>
                                                        </div>
                                                    </div>
                                                 </div>
                                                 <div class="form-group info">
                                                    <div class="h6 descrip${btnClass + id}" id="descrip${btnClass + id}">Company Description(Optional)</div>
                                                    <input type="text" class="form-control descrip${btnClass + id}Inp" id="cityInp" placeholder="Company Description(Optional)">
                                                 </div>
                                                <div class="form-group info">
                                                    <div class="h6 tasks${btnClass + id} cs_tasks" id="tasks">Achievements/Tasks</div>
                                                    <span class="tasks${btnClass + id}Ul hideDiv">
                                                        <input type="text" class="form-control tasks${btnClass + id}Input" id="tasksInp" placeholder="Achievements/Tasks">
                                                    </span>
                                                    <span >
                                                        <ul class="tasks${btnClass + id}InputUl">
    
                                                        </ul>
                                                    </span>
                                                    
                                                </div>
                                            </form>
                                            <span class="delAllData"><i class="far fa-trash-alt"></i></span>
                                            </div>`)

    });
    // Add new Work Experience Field  
    $('.addDataJob .btn').on('click', function (e) {

        let inp = e.currentTarget.parentNode;
        let btnClass = $(inp).attr("class").split(' ')[1].toString()
        console.log(btnClass)

        let id = $('.workForm').length;

        $(`.exp-position` + `` + `.` + `${btnClass}`).append(` <div class="workForm">
                                            <form class="experienceForm">
                                                <div class="form-group info">
                                                
                                                    <div class="h4 exp${btnClass + id} cs_title" id="exp${btnClass + id}">Title/Position</i></div>
                                                    <input type="text " class="form-control exp${btnClass + id}Inp" id="email3Inp" placeholder="Title/Position">
                                                 </div>
                                                <div class="form-group info">
                                                    <div class="h4 work${btnClass + id}" id="work${btnClass + id}">Workplace/Company</div>
                                                    <input type="text " class="form-control work${btnClass + id}Inp" id="emai2lInp" placeholder="Workplace/Company">
                                                 </div>
                                                 <div class="form-group info">
                                                    <div class="periodToogle">
                                                        <div class="period">
                                                            <div class="data_Period">
                                                            <div class="period-start">
                                                                <div class="h6 startMont${btnClass + id}" id="startMont${btnClass + id}">mm</div>
                                                                <input type="text" maxlength="2" class="form-control startMont${btnClass + id}Inp" id="startMontInp" placeholder="mm">
                                                                <div class="slash">/</div>
                                                                <div class="h6 startYear${btnClass + id}" id="startYear${btnClass + id}">yyyy</div>
                                                                <input type="text" maxlength="4" class="form-control startYear${btnClass + id}Inp" id="startYearInp" placeholder="yyyy">
                                                            </div>
                                                            <div class="separator"> - </div>
                                                            <div class="h6 hideDiv" id="present${btnClass + id}Text"">Present</div>
                                                            <div class="period-end" id="present${btnClass + id}End">
                                                                <div class="h6 endMont${btnClass + id}" id="endMont${btnClass + id}">mm</div>
                                                                <input type="text" maxlength="2" class="form-control endMont${btnClass + id}Inp" id="endMontInp" placeholder="mm">
                                                                <div class="slash">/</div>
                                                                <div class="h6 endYear${btnClass + id}" id="endYear${btnClass + id}">yyyy</div>
                                                                <input type="text" maxlength="4" class="form-control endYear${btnClass + id}Inp" id="endYearInp" placeholder="yyyy">
                                                            </div>
                                                            <div class="checkbox">
                                                                <div class="period-present">
                                                                    <label>
                                                                        <input type="checkbox" class="present${btnClass + id}" id="checkbox"> Present
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            </div>
                                                            <div class="form-group info">
                                                               <div class="h6 city${btnClass + id} cs_city" id="city${btnClass + id}">City, Country</div>
                                                               <input type="text" class="form-control city${btnClass + id}Inp" id="cityInp" placeholder="City, Country">
                                                            </div>
                                                        </div>
                                                    </div>
                                                 </div>
                                                 <div class="form-group info">
                                                    <div class="h6 descrip${btnClass + id}" id="descrip${btnClass + id}">Company Description(Optional)</div>
                                                    <input type="text" class="form-control descrip${btnClass + id}Inp" id="cityInp" placeholder="Company Description(Optional)">
                                                 </div>
                                                <div class="form-group info">
                                                    <div class="h6 tasks${btnClass + id} cs_tasks" id="tasks">Achievements/Tasks</div>
                                                    <span class="tasks${btnClass + id}Ul hideDiv">
                                                        <input type="text" class="form-control tasks${btnClass + id}Input" id="tasksInp" placeholder="Achievements/Tasks">
                                                    </span>
                                                    <span >
                                                        <ul class="tasks${btnClass + id}InputUl">
    
                                                        </ul>
                                                    </span>
                                                    
                                                </div>
                                            </form>
                                            <span class="delAllData"><i class="far fa-trash-alt"></i></span>
                                            </div>`)

    });
    // Add new Work Experience Field  
    $('.addGraphicJob .btn').on('click', function (e) {

        let inp = e.currentTarget.parentNode;
        let btnClass = $(inp).attr("class").split(' ')[1].toString()
        console.log(btnClass)

        let id = $('.workForm').length;

        $(`.exp-position` + `` + `.` + `${btnClass}`).append(` <div class="workForm">
        <form class="experienceForm">
            
             <div class="form-group info">
                <div class="periodToogle">
                    <div class="period">
                        <div class="data_Period">
                        <div class="period-start">
                            <div class="h5 startMontDigital${btnClass + id} nameData" id="startMontDigital${btnClass + id}">mm</div>
                            <input type="text" maxlength="2" class="form-control startMontDigital${btnClass + id}Inp" id="startMontDig${btnClass + id}Inp" placeholder="mm">
                            <div class="slash">/</div>
                            <div class="h5 startYearDigital${btnClass + id} nameData" id="startYearDigital${btnClass + id}">yyyy</div>
                            <input type="text" maxlength="4" class="form-control startYearDigital${btnClass + id}Inp" id="startYearDig${btnClass + id}Inp" placeholder="yyyy">
                        </div>
                        <div class="separator"> - </div>
                        <div class="h5 hideDiv nameData" id="presentDigital${btnClass + id}Text">Present</div>
                        <div class="period-end" id="presentDigital${btnClass + id}End">
                            <div class="h5 endMontDigital${btnClass + id} nameData" id="endMontDigital${btnClass + id}">mm</div>
                            <input type="text" maxlength="2" class="form-control endMontDigital${btnClass + id}Inp" id="endMontDigital${btnClass + id}Inp" placeholder="mm">
                            <div class="slash">/</div>
                            <div class="h5 endYearDigital${btnClass + id} nameData" id="endYearDigital${btnClass + id}">yyyy</div>
                            <input type="text" maxlength="4" class="form-control endYearDigital${btnClass + id}Inp" id="endYearDigital${btnClass + id}Inp" placeholder="yyyy">
                        </div>
                        <div class="checkbox">
                            <div class="period-present">
                                <label>
                                    <input type="checkbox" class="presentDigital${btnClass + id}" id="checkbox"> Present
                                </label>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-group info">
                 <div class="h4 expGraphic${btnClass + id} " id="expGraphic${btnClass + id}">Title/Position</i></div>
                <input type="text " class="form-control expGraphic${btnClass + id}Inp" id="emailInp" placeholder="Title/Position">
             </div>
            <div class="form-group info">
                <div class="h4 workGraphic${btnClass + id}" id="workGraphic${btnClass + id}">Workplace/Company</div>
                <input type="text " class="form-control workGraphic${btnClass + id}Inp" id="emailInp" placeholder="Workplace/Company">
             </div>

             <div class="form-group info">
                <div class="h6 descripGraphic${btnClass + id}" id="descripGraphic${btnClass + id}">Tasks Description</div>
                <textarea type="text" class="form-control descripGraphic${btnClass + id}Inp" id="descripGraphic${btnClass + id}Inp" placeholder="Tasks Description"></textarea>
             </div>
           
        </form>
        <span class="delAllData"><i class="far fa-trash-alt"></i></span>
        </div>`)

    });
    // Add new Education Field                                
    $('.addEdu .btn').on('click', function (e) {

        let inp = e.currentTarget.parentNode;
        let btnClass = $(inp).attr("class").split(' ')[1].toString()
        let id = $('.workForm').length;

        $(`.exp-positionEdu` + `` + `.` + `${btnClass}`).append(`  <div class="workForm">
                                    <div class="box-title light${btnClass}"></div>
                                    <form class="experienceForm">
                                        <div class="form-group info">
                                        
                                            <div class="h4 study${btnClass + id} cs_title" id="study${btnClass + id}">Study Program</i></div>
                                            <input type="text " class="form-control study${btnClass + id}Inp" id="study${btnClass + id}Inp" placeholder="Study Program">
                                        </div>
                                        <div class="form-group info">
                                            <div class="h4 Instit${btnClass + id}" id="Instit${btnClass + id}">Institution/Place of Education</div>
                                            <input type="text " class="form-control Instit${btnClass + id}Inp" id="email${btnClass + id}Inp" placeholder="Institution/Place of Education">
                                        </div>
                                        <div class="form-group info">
                                            <div class="periodToogle">
                                                <div class="period">
                                                    <div class="data_Period">
                                                    <div class="period-start">
                                                        <div class="h6 startMontEd${btnClass + id}" id="startMontEd${btnClass + id}">mm</div>
                                                        <input type="text" maxlength="2" class="form-control startMontEd${btnClass + id}Inp" id="startMontEd${btnClass + id}Inp" placeholder="mm">
                                                        <div class="slash">/</div>
                                                        <div class="h6 startYearEd${btnClass + id}" id="startYearEd${btnClass + id}">yyyy</div>
                                                        <input type="text" maxlength="4" class="form-control startYearEd${btnClass + id}Inp" id="startYearEd${btnClass + id}Inp" placeholder="yyyy">
                                                    </div>
                                                    <div class="separator"> - </div>
                                                    <div class="h6 hideDiv " id="presentEdu${btnClass + id}Text">Present</div>
                                                    <div class="period-end" id="presentEdu${btnClass + id}End">
                                                        <div class="h6 endMontEd${btnClass + id}" id="endMontEd${btnClass + id}">mm</div>
                                                        <input type="text" maxlength="2" class="form-control endMontEd${btnClass + id}Inp" id="endMontEd${btnClass + id}Inp" placeholder="mm">
                                                        <div class="slash">/</div>
                                                        <div class="h6 endYearEd${btnClass + id}" id="endYearEd${btnClass + id}">yyyy</div>
                                                        <input type="text" maxlength="4" class="form-control endYearEd${btnClass + id}Inp" id="endYearEd${btnClass + id}Inp" placeholder="yyyy">
                                                    </div>
                                                    <div class="checkbox">
                                                        <div class="period-present">
                                                            <label>
                                                                <input type="checkbox" class="presentEdu${btnClass + id}" id="checkbox"> Present
                                                            </label>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <div class="form-group info">
                                                        <div class="h6 cityEdu${btnClass + id} cs_city" id="cityEdu${btnClass + id}">City, Country</div>
                                                        <input type="text" class="form-control cityEdu${btnClass + id}Inp" id="cityEdu${btnClass + id}Inp" placeholder="City, Country">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    
                                        <div class="form-group info">
                                            <div class="h6 tasksEducation${btnClass + id} cs_tasks" id="tasks">Courses</div>
                                                <span class="tasksEducation${btnClass + id}Ul hideDiv">
                                                    <input type="text" class="form-control tasksEducation${btnClass + id}Input" id="tasksInp" placeholder="Course/Thesis/Project">
                                                </span>
                                            <span >
                                                <ul class="tasksEducation${btnClass + id}InputUl">

                                                </ul>
                                            </span>
                                        
                                    </div>
                                    </form>
                                    <span class="delAllData"><i class="far fa-trash-alt"></i></span>
                                    </div>`)
    });
    $('.addGraphicEdu .btn').on('click', function (e) {

        let inp = e.currentTarget.parentNode;
        let btnClass = $(inp).attr("class").split(' ')[1].toString()
        let id = $('.workForm').length;

        $(`.exp-positionEdu` + `` + `.` + `${btnClass}`).append(`  <div class="workForm">
                                                            <form class="experienceForm">
                                                                
                                                                <div class="form-group info">
                                                                    <div class="periodToogle">
                                                                        <div class="period">
                                                                            <div class="data_Period_CT">
                                                                            <div class="period-start">
                                                                                <div class="h5 startMontEdData${btnClass + id} nameData" id="startMontEdData${btnClass + id}">mm</div>
                                                                                <input type="text" maxlength="2" class="form-control startMontEdData${btnClass + id}Inp" id="startMontEdDataInp" placeholder="mm">
                                                                                <div class="slash">/</div>
                                                                                <div class="h5 startYearEdData${btnClass + id} nameData" id="startYearEdData${btnClass + id}">Year</div>
                                                                                <input type="text" maxlength="4" class="form-control startYearEdData${btnClass + id}Inp" id="startYearEdDataInp" placeholder="yyyy">
                                                                            </div>
                                                                            <div class="separator"> - </div>
                                                                            <div class="h5 hideDiv nameData " id="presentEduData${btnClass + id}Text">Present</div>
                                                                            <div class="period-end" id="presentEduData${btnClass + id}End">
                                                                                <div class="h5 endMontEdData${btnClass + id} nameData" id="endMontEdData${btnClass + id}">mm</div>
                                                                                <input type="text" maxlength="2" class="form-control endMontEdData${btnClass + id}Inp" id="endMontEdData${btnClass + id}Inp" placeholder="mm">
                                                                                <div class="slash">/</div>
                                                                                <div class="h5 endYearEdData${btnClass + id} nameData" id="endYearEdData${btnClass + id}">Year</div>
                                                                                <input type="text" maxlength="4" class="form-control endYearEdData${btnClass + id}Inp" id="endYearEdData${btnClass + id}Inp" placeholder="yyyy">
                                                                            </div>
                                                                            <div class="checkbox">
                                                                                <div class="period-present">
                                                                                    <label>
                                                                                        <input type="checkbox" class="presentEduData${btnClass + id}" id="checkbox"> Present
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group info">
                                                                
                                                                    <div class="h4 studyGraphic${btnClass + id} " id="studyGraphic${btnClass + id}">Study Program</i></div>
                                                                    <input type="text " class="form-control studyGraphic${btnClass + id}Inp" id="studyGraphic${btnClass + id}Inp" placeholder="Study Program">
                                                                </div>
                                                                <div class="form-group info">
                                                                    <div class="h4 InstitGraphic${btnClass + id}" id="InstitGraphic${btnClass + id}">Institution/Place of Education</div>
                                                                    <input type="text " class="form-control InstitGraphic${btnClass + id}Inp" id="emailData${btnClass + id}Inp" placeholder="Institution/Place of Education">
                                                                </div>
                                                                
                                                            </form>
                                                            <span class="delAllData"><i class="far fa-trash-alt"></i></span>
                                                            </div>`)
    });
    $('.addDataEdu .btn').on('click', function (e) {

        let inp = e.currentTarget.parentNode;
        let btnClass = $(inp).attr("class").split(' ')[1].toString()
        let id = $('.workForm').length;

        $(`.exp-positionEdu` + `` + `.` + `${btnClass}`).append(`  <div class="workForm">
                                    
                                    <form class="experienceForm">
                                        <div class="form-group info">
                                        
                                            <div class="h4 study${btnClass + id} cs_title" id="study${btnClass + id}">Study Program</i></div>
                                            <input type="text " class="form-control study${btnClass + id}Inp" id="study${btnClass + id}Inp" placeholder="Study Program">
                                        </div>
                                        <div class="form-group info">
                                            <div class="h4 Instit${btnClass + id}" id="Instit${btnClass + id}">Institution/Place of Education</div>
                                            <input type="text " class="form-control Instit${btnClass + id}Inp" id="email${btnClass + id}Inp" placeholder="Institution/Place of Education">
                                        </div>
                                        <div class="form-group info">
                                            <div class="periodToogle">
                                                <div class="period">
                                                    <div class="data_Period">
                                                    <div class="period-start">
                                                        <div class="h6 startMontEd${btnClass + id}" id="startMontEd${btnClass + id}">mm</div>
                                                        <input type="text" maxlength="2" class="form-control startMontEd${btnClass + id}Inp" id="startMontEd${btnClass + id}Inp" placeholder="mm">
                                                        <div class="slash">/</div>
                                                        <div class="h6 startYearEd${btnClass + id}" id="startYearEd${btnClass + id}">yyyy</div>
                                                        <input type="text" maxlength="4" class="form-control startYearEd${btnClass + id}Inp" id="startYearEd${btnClass + id}Inp" placeholder="yyyy">
                                                    </div>
                                                    <div class="separator"> - </div>
                                                    <div class="h6 hideDiv " id="presentEdu${btnClass + id}Text">Present</div>
                                                    <div class="period-end" id="presentEdu${btnClass + id}End">
                                                        <div class="h6 endMontEd${btnClass + id}" id="endMontEd${btnClass + id}">mm</div>
                                                        <input type="text" maxlength="2" class="form-control endMontEd${btnClass + id}Inp" id="endMontEd${btnClass + id}Inp" placeholder="mm">
                                                        <div class="slash">/</div>
                                                        <div class="h6 endYearEd${btnClass + id}" id="endYearEd${btnClass + id}">yyyy</div>
                                                        <input type="text" maxlength="4" class="form-control endYearEd${btnClass + id}Inp" id="endYearEd${btnClass + id}Inp" placeholder="yyyy">
                                                    </div>
                                                    <div class="checkbox">
                                                        <div class="period-present">
                                                            <label>
                                                                <input type="checkbox" class="presentEdu${btnClass + id}" id="checkbox"> Present
                                                            </label>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <div class="form-group info">
                                                        <div class="h6 cityEdu${btnClass + id} cs_city" id="cityEdu${btnClass + id}">City, Country</div>
                                                        <input type="text" class="form-control cityEdu${btnClass + id}Inp" id="cityEdu${btnClass + id}Inp" placeholder="City, Country">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    
                                        <div class="form-group info">
                                            <div class="h6 tasksEducation${btnClass + id} cs_tasks" id="tasks">Courses</div>
                                                <span class="tasksEducation${btnClass + id}Ul hideDiv">
                                                    <input type="text" class="form-control tasksEducation${btnClass + id}Input" id="tasksInp" placeholder="Course/Thesis/Project">
                                                </span>
                                            <span >
                                                <ul class="tasksEducation${btnClass + id}InputUl">

                                                </ul>
                                            </span>
                                        
                                    </div>
                                    </form>
                                    <span class="delAllData"><i class="far fa-trash-alt"></i></span>
                                    </div>`)
    });
    $('.addProjectJob .btn').on('click', function (e) {

        let inp = e.currentTarget.parentNode;
        let btnClass = $(inp).attr("class").split(' ')[1].toString()
        let id = $('.workForm').length;

        $(`.exp-positionData` + `` + `.` + `${btnClass}`).append(` <div class="workForm">
                                                        
                                                        <form class="experienceForm">
                                                            
                                                            <div class="form-group info">
                                                                <div class="h5 ProjectData${btnClass + id}" id="ProjectData${btnClass + id}">Project Description</div>
                                                                <input type="text " class="form-control ProjectData${btnClass + id}Inp" id="ProjectData${btnClass + id}Inp" placeholder="Project Description">
                                                            </div>
                                                            
                                                        </form>
                                                        <span class="delAllData"><i class="far fa-trash-alt"></i></span>
                                                        </div>`)
    });
    $('.addProject .btn').on('click', function (e) {
        let inp = e.currentTarget.parentNode;
        let btnClass = $(inp).attr("class").split(' ')[1].toString()
        let id = $('.workForm').length;
        $(`.exp-positionProject` + `` + `.` + `${btnClass}`).append(`  <div class="workForm">
                                            
                                            <form class="experienceForm">
                                                
                                                <div class="form-group info">
                                                    <div class="h5 Project${btnClass + id}" id="Project${btnClass + id}">Project Name</div>
                                                    <input type="text " class="form-control Project${btnClass + id}Inp" id="Project${btnClass + id}Inp" placeholder="Project Name">
                                                </div>
                                                <div class="form-group info">
                                                    <div class="periodToogle">
                                                        <div class="period">
                                                            <div class="data_Period_CT">
                                                            <div class="period-start">
                                                                <div class="h6 startMontProject${btnClass + id}" id="startMontProject${btnClass + id}">mm</div>
                                                                <input type="text" maxlength="2" class="form-control startMontProject${btnClass + id}Inp" id="startMontProject${btnClass + id}Inp" placeholder="mm">
                                                                <div class="slash">/</div>
                                                                <div class="h6 startYearProject${btnClass + id}" id="startYearProject${btnClass + id}">yyyy</div>
                                                                <input type="text" maxlength="4" class="form-control startYearProject${btnClass + id}Inp" id="startYearProject${btnClass + id}Inp" placeholder="yyyy">
                                                            </div>
                                                            <div class="separator"> - </div>
                                                            <div class="h6 hideDiv " id="presentProject${btnClass + id}Text">Present</div>
                                                            <div class="period-end" id="presentProject${btnClass + id}End">
                                                                <div class="h6 endMontProject${btnClass + id}" id="endMontProject${btnClass + id}">mm</div>
                                                                <input type="text" maxlength="2" class="form-control endMontProject${btnClass + id}Inp" id="endMontProject${btnClass + id}Inp" placeholder="mm">
                                                                <div class="slash">/</div>
                                                                <div class="h6 endYearProject${btnClass + id}" id="endYearProject${btnClass + id}">yyyy</div>
                                                                <input type="text" maxlength="4" class="form-control endYearProject${btnClass + id}Inp" id="endYearProject${btnClass + id}Inp" placeholder="yyyy">
                                                            </div>
                                                            <div class="checkbox">
                                                                <div class="period-present">
                                                                    <label>
                                                                        <input type="checkbox" class="presentProject${btnClass + id}" id="checkbox"> Present
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group info">
                                                    <div class="h6 tasksProject${btnClass + id} cs_tasks" id="tasks">Description of Achievements</div>
                                                    <span class="tasksProject${btnClass + id}Ul hideDiv">
                                                        <input type="text" class="form-control tasksProject${btnClass + id}Input" id="tasksInp" placeholder="Description of Achievements">
                                                    </span>
                                                    <span >
                                                        <ul class="tasksProject${btnClass + id}InputUl">

                                                        </ul>
                                                    </span>
                                                    
                                                </div>
                                            </form>
                                            <span class="delAllData"><i class="far fa-trash-alt"></i></span>
                                            </div>`)
    });
    $('.addAchieve .btn').on('click', function (e) {
        let inp = e.currentTarget.parentNode;
        let btnClass = $(inp).attr("class").split(' ')[1].toString()
        let id = $('.workForm').length;
        $(`.exp-positionAchieve` + `` + `.` + `${btnClass}`).append(`  <div class="workForm">
                                            
                                            <form class="experienceForm">
                                                
                                                <div class="form-group info">
                                                    <div class="h5 Certif${btnClass + id}" id="Certif${btnClass + id}">Achievements/Certificates Name</div>
                                                    <input type="text " class="form-control Certif${btnClass + id}Inp" id="Certif${btnClass + id}Inp" placeholder="Achievements/Certificates Name">
                                                </div>
                                                <div class="form-group info">
                                                    <div class="periodToogle">
                                                        <div class="period">
                                                            <div class="data_Period_CT">
                                                            <div class="period-start">
                                                                <div class="h6 startMontCertif${btnClass + id}" id="startMontCertif${btnClass + id}">mm</div>
                                                                <input type="text" maxlength="2" class="form-control startMontCertif${btnClass + id}Inp" id="startMontCertif${btnClass + id}Inp" placeholder="mm">
                                                                <div class="slash">/</div>
                                                                <div class="h6 startYearCertif${btnClass + id}" id="startYearCertif${btnClass + id}">yyyy</div>
                                                                <input type="text" maxlength="4" class="form-control startYearCertif${btnClass + id}Inp" id="startYearCertif${btnClass + id}Inp" placeholder="yyyy">
                                                            </div>
                                                            <div class="separator"> - </div>
                                                            <div class="h6 hideDiv " id="presentCertif${btnClass + id}Text">Present</div>
                                                            <div class="period-end" id="presentCertif${btnClass + id}End">
                                                                <div class="h6 endMontCertif${btnClass + id}" id="endMontCertif${btnClass + id}">mm</div>
                                                                <input type="text" maxlength="2" class="form-control endMontCertif${btnClass + id}Inp" id="endMontCertif${btnClass + id}Inp" placeholder="mm">
                                                                <div class="slash">/</div>
                                                                <div class="h6 endYearCertif${btnClass + id}" id="endYearCertif${btnClass + id}">yyyy</div>
                                                                <input type="text" maxlength="4" class="form-control endYearCertif${btnClass + id}Inp" id="endYearCertif${btnClass + id}Inp" placeholder="yyyy">
                                                            </div>
                                                            <div class="checkbox">
                                                                <div class="period-present">
                                                                    <label>
                                                                        <input type="checkbox" class="presentCertif${btnClass + id}" id="checkbox"> Present
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group info">
                                                    <div class="h5 Achieve${btnClass + id}" id="Achieve${btnClass + id}">Description of Achievements</div>
                                                    <input type="text " class="form-control Achieve${btnClass + id}Inp" id="Achieve${btnClass + id}Inp" placeholder="Description of Achievements">
                                                </div>
                                            </form>
                                            <span class="delAllData"><i class="far fa-trash-alt"></i></span>
                                            </div>`)
    });

    // On click on button to add new box for SKILLS & COMPETENCIES
    $('.addSkills .btn').on('click', function (e) {
        let inp = e.currentTarget.parentNode;
        let btnClass = $(inp).attr("class").split(' ')[1].toString()
        let id = $('.boxLenght').length;
        $(`.skillCompet` + `` + `.` + `${btnClass}`).append(`   <div class="col-md-2 boxLenght">
                                    <form class="">
                                        <div class="form-group info skillsForm${btnClass}">
                                            <div class="h6 skills${btnClass + id}" id="skills${btnClass + id}">Skills</div>
                                            <input type="text " class="form-control skills${btnClass + id}Inp" id="skillsInp" placeholder="Skill">
                                            <span class="spanDelete " id="spanDelete"><i class="fas fa-times"></i></span>
                                        </div>
                                        
                                    </form>
                                    
                                </div>`)
    })
    $('.addLanguage .btn').on('click', function (e) {
        let inp = e.currentTarget.parentNode;
        let btnClass = $(inp).attr("class").split(' ')[1].toString()
        let id = $('.workForm').length;
        $(`.exp-positionLanguage` + `` + `.` + `${btnClass}`).append(` <div class="workForm">
                                            
                                            <form class="experienceForm lang">
                                                
                                                <div class="form-group info">
                                                    <div class="h6 Language${btnClass + id}" id="Language${btnClass + id}">Language</div>
                                                    <input type="text " class="form-control Language${btnClass + id}Inp" id="LanguageInp" placeholder="Language">
                                                </div>
                                                <div class="langStar">
                                                    <section class='rating-widget'>

                                                        <!-- Rating Stars Box -->
                                                        <div class='rating-stars text-center'>
                                                        <ul class="stars${btnClass + id}" id='stars'>
                                                            <li class='star' data-toggle="tooltip" data-placement="bottom" title="Elementary Proficiency"  data-value='1'>
                                                            <i class="fas fa-circle"></i>
                                                            </li>
                                                            <li class='star' data-toggle="tooltip" data-placement="bottom" title='Limited Working Proficiency' data-value='2'>
                                                            <i class="fas fa-circle"></i>
                                                            </li>
                                                            <li class='star' data-toggle="tooltip" data-placement="bottom" title='Professional Working Proficiency' data-value='3'>
                                                            <i class="fas fa-circle"></i>
                                                            </li>
                                                            <li class='star' data-toggle="tooltip" data-placement="bottom" title='Full Professional Proficiency' data-value='4'>
                                                            <i class="fas fa-circle"></i>
                                                            </li>
                                                            <li class='star' data-toggle="tooltip" data-placement="bottom" title='Native or Bilingual Proficiency' data-value='5'>
                                                            <i class="fas fa-circle"></i>
                                                            </li>
                                                        </ul>
                                                        </div>
                                                        <div class="h6 stars${btnClass + id}Comment" id="comment${btnClass}"></div>
                                                    </section>
                                                    
                                                </div>
                                            </form>
                                            <span class="delAllData"><i class="far fa-trash-alt"></i></span>
                                            </div>`)
    })
    $('.addInterests .btn').on('click', function (e) {
        let inp = e.currentTarget.parentNode;
        let btnClass = $(inp).attr("class").split(' ')[1].toString()
        let id = $('.boxLenghtInt').length;
        $(`.interestsCompet` + `` + `.` + `${btnClass}`).append(`  <div class="col-md-2 boxLenghtInt">
                                        <form class="">
                                            <div class="form-group info interestsForm${btnClass}">
                                                <div class="h6 interests${btnClass + id}" id="interests${btnClass + id}">Interests</div>
                                                <input type="text " class="form-control interests${btnClass + id}Inp" id="interestsInp" placeholder="Interests">
                                                <span class="spanDelete " id="spanDelete"><i class="fas fa-times"></i></span>
                                            </div>
                                        </form>
                                    </div>`)
    })
    $('.addSkillsData .btn').on('click', function (e) {
        let inp = e.currentTarget.parentNode;
        let btnClass = $(inp).attr("class").split(' ')[1].toString()
        let id = $('.langSkill').length;
        $(`.experienceFormSkils` + `` + `.` + `${btnClass}`).append(` <div class="langSkill workForm">
                                                            <div class="form-group info">
                                                                <div class="h6 skillData${btnClass + id}" id="skillData${btnClass + id}">Skill/Program</div>
                                                                <input type="text " class="form-control skillData${btnClass + id}Inp" id="skillData${btnClass + id}Inp" placeholder="Skill/Program">
                                                            </div>
                                                            <div class="skillsStar">
                                                            <form action="">
                                                                
                                                            <input class="starSkill star-5"  id="star-5${btnClass + id}" type="radio" name="star"/>
                                                            <label class="starSkill star-5" data-toggle="tooltip" data-placement="bottom" title='Native or Bilingual Proficiency' for="star-5${btnClass + id}"></label>
                                                            <input class="starSkill star-4" id="star-4${btnClass + id}" type="radio" name="star"/>
                                                            <label class="starSkill star-4" data-toggle="tooltip" data-placement="bottom" title='Full Professional Proficiency' for="star-4${btnClass + id}"></label>
                                                            <input class="starSkill star-3" id="star-3${btnClass + id}" type="radio" name="star"/>
                                                            <label class="starSkill star-3" data-toggle="tooltip" data-placement="bottom" title='Professional Working Proficiency' for="star-3${btnClass + id}"></label>
                                                            <input class="starSkill star-2" id="star-2${btnClass + id}" type="radio" name="star"/>
                                                            <label class="starSkill star-2" data-toggle="tooltip" data-placement="bottom" title='Limited Working Proficiency' for="star-2${btnClass + id}"></label>
                                                            <input class="starSkill star-1" id="star-1${btnClass + id}" type="radio" name="star"/>
                                                            <label class="starSkill star-1" data-toggle="tooltip" data-placement="bottom" title="Elementary Proficiency" for="star-1${btnClass + id}"></label>
                                                            </form>
                                                            </div>
                                                            <span class="delAllData"><i class="far fa-trash-alt"></i></span>
                                                        </div>`)
    })


    // Rating Language

    /* 1. Visualizing things on Hover - See next part for action on click */
    $(document).on('mouseover', '#stars li', function (e) {
        var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on

        // Now highlight all the stars that's not after the current hovered star
        $(this).parent().children('li.star').each(function (e) {
            if (e < onStar) {

                $(this).addClass('hover');
            }
            else {
                $(this).removeClass('hover');

            }
        });

    }).on('mouseout', '#stars li', function () {
        $(this).parent().children('li.star').each(function (e) {
            $(this).removeClass('hover');
        });
    });


    /* 2. Action to perform on click */
    $(document).on('click', '#stars li', function (e) {
        var onStar = parseInt($(this).data('value'), 10); // The star currently selected
        var stars = $(this).parent().children('li.star');
        let starId = e.currentTarget.parentNode;
        let Id = $(starId).attr('class');
        console.log(Id)
        if (onStar == 1) {
            console.log('ace11')
            $(`.` + `${Id}` + `Comment`).text('Elementary Proficiency');
        } else if (onStar === 2) {
            $(`.` + `${Id}` + `Comment`).text('Limited Working Proficiency');
        } else if (onStar === 3) {
            $(`.` + `${Id}` + `Comment`).text('Professional Working Proficiency');
        } else if (onStar == 4) {
            $(`.` + `${Id}` + `Comment`).text('Full Professional Proficiency');
        } else if (onStar == 5) {
            $(`.` + `${Id}` + `Comment`).text('Native or Bilingual Proficiency');
        }
        for (i = 0; i < stars.length; i++) {
            $(stars[i]).removeClass('selected');
        }

        for (i = 0; i < onStar; i++) {
            $(stars[i]).addClass('selected');
        }
    });
    // $('[data-toggle="tooltip"]').tooltip();
    // On click on the button Edit, to make the editable resume, remove the image and place the code editable

    $('.edit .btn').on('click', function () {
        $(this).parent().toggleClass('editable');
        $('.imageCv div').toggleClass('hideDiv')
        $(`.${cvType}_Cv`).toggleClass('hideDiv')
    })

    $(window).on('hashchange', onRouteChange);
    function onRouteChange() {
        let hash = window.location.hash.substr(1);
        window.location.hash = 'curriculumVitae';

    }
    // for Picture choose file to upload
    function readURL(input) {
        if (input.files && input.files[0]) {
            var readerWeb = new FileReader();
            readerWeb.onload = function (e) {
                $('#imagePreviewWeb, #imagePreviewDigital, #imagePreviewData').css('background-image', 'url(' + e.target.result + ')');
                $('#imagePreviewWeb, #imagePreviewDigital, #imagePreviewData').hide();
                $('#imagePreviewWeb, #imagePreviewDigital, #imagePreviewData').fadeIn(650);
            }
            readerWeb.readAsDataURL(input.files[0]);
        }
    }
    $("#imageUploadWeb, #imageUploadDigital, #imageUploadData").change(function () {
        readURL(this);
    });

    //DOWNLOAD THE RESUME
    function getPDF() {
        console.log('download')
        var HTML_Width = $(`.` + `${cvType}` + `_Cv`).width();
        var HTML_Height = $(`.` + `${cvType}` + `_Cv`).height();
        var top_left_margin = 15;
        var PDF_Width = HTML_Width + (top_left_margin * 2);
        var PDF_Height = (PDF_Width * 1.5) + (top_left_margin * 2);
        var canvas_image_width = HTML_Width;
        var canvas_image_height = HTML_Height;

        var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;
        console.log(cvType);

        html2canvas($(`.` + `${cvType}` + `_Cv`)[0], {
            allowTaint: true,
            useCORS: false,
        }).then(function (canvas) {
            canvas.getContext('2d');

            console.log(canvas.height + "  " + canvas.width);
            var imgData = canvas.toDataURL("image/pdf", 1.0);
            var pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
            pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);
            // let pdf = new jsPDF('p', 'mm', 'a4');
            // pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 5, 10, 195, 270)

            for (var i = 1; i <= totalPDFPages; i++) {
                pdf.addPage(PDF_Width, PDF_Height);
                pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height * i) + (top_left_margin * 4), canvas_image_width, canvas_image_height);
            }

            pdf.save("MyResume.pdf");
        });
    };
    $('.download').on('click', function () {
        getPDF();
    })
    //Modal to show at the click of the weAreLaika after some time
    $('.weAreLaikaModal').on('click', function () {
        setTimeout(function () {
            $('#myModal').modal();
        }, 20000);
        console.log(setTimeout)
    })


});