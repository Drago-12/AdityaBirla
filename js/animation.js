

//  const showDetails  = document.getElementById('detailsID');

//  function myfun(){
//     showDetails.classList.add('detailsShow');
//  }

//  myfun()





const showDetails = document.getElementById('detailsID');
const detailsShowFun = () => {
    showDetails.classList.add('detailsShow');
}

showDetails.addEventListener('load', detailsShowFun);
detailsShowFun()









const detailsImg = document.getElementById('details-image-show');

const detailsImgFun = () => {
    detailsImg.classList.add('show')
}

detailsImg.addEventListener('loadeddata', detailsImgFun)

detailsImgFun()








const benefit = document.querySelector('.benefits-container');

window.addEventListener('scroll', () => {
    if (window.innerWidth > 841 && window.pageYOffset > 300) {
        benefit.classList.add('benefits-container-rotate');
    } else if (window.innerWidth < 841 && window.pageYOffset > 1020) {
        benefit.classList.add('benefits-container-rotate');
    }
    else {
        benefit.classList.remove('benefits-container-rotate');
    }
})






const SecFour = document.querySelector('.sec-four-container');

window.addEventListener('scroll', () => {
    if (window.innerWidth > 841 && window.pageYOffset > 1000) {
        SecFour.classList.add('sec-four-container-show');
    } else if (window.innerWidth < 841 && window.pageYOffset > 2142) {
        SecFour.classList.add('sec-four-container-show');
    }
    else {
        SecFour.classList.remove('sec-four-container-show');
    }
})



const secFivePara = document.querySelector('.sec-five-para');

window.addEventListener('scroll', () => {
    if (window.innerWidth > 841 && window.pageYOffset > 1100) {
        secFivePara.classList.add('sec-five-para-show');
    } else if (window.innerWidth < 841 && window.pageYOffset > 2652) {
        secFivePara.classList.add('sec-five-para-show');

    }
    else {
        secFivePara.classList.remove('sec-five-para-show');
    }
})





const secFiveHadding = document.querySelector('.sec-five-hadding');

window.addEventListener('scroll', () => {
    if (window.innerWidth > 841 && window.pageYOffset > 1200) {
        secFiveHadding.classList.add('sec-five-hadding-show');
    } else if (window.innerWidth < 841 && window.pageYOffset > 2654) {
        secFiveHadding.classList.add('sec-five-hadding-show');
    }
    else {
        secFiveHadding.classList.remove('sec-five-hadding-show');
    }
})





// const secSixBox = document.querySelectorAll('#image1');

// window.addEventListener('scroll' , () =>{
//     if(window.pageYOffset > 1060){
//         secSixBox.classList.add('image1-show');
//     }else{
//         secSixBox.classList.remove('image1-show');

//     }
// })






const secSavenWomen = document.querySelector('.women');

window.addEventListener('scroll', () => {
    if (window.innerWidth > 841 && window.pageYOffset > 1950) {
        secSavenWomen.classList.add('women-show');
    }
    else if (window.innerWidth < 841 && window.pageYOffset > 7041) {
        secSavenWomen.classList.add('women-show');
    }
    else if (window.innerWidth < 751 && window.pageYOffset > 6542) {
        secSavenWomen.classList.add('women-show');
    }
    else if (window.innerWidth < 551 && window.pageYOffset > 5975) {
        secSavenWomen.classList.add('women-show');
    }
    else if (window.innerWidth < 471 && window.pageYOffset > 5578) {
        secSavenWomen.classList.add('women-show');
    }
    else if (window.innerWidth < 371 && window.pageYOffset > 5209) {
        secSavenWomen.classList.add('women-show');
    }
    else {
        secSavenWomen.classList.remove('women-show');
    }
})








const wimg1 = document.querySelector('.wimg11');
const wimg2 = document.querySelector('.wimg12');
const wimg3 = document.querySelector('.wimg13');
const wimg4 = document.querySelector('.wimg14');

window.addEventListener('scroll', () => {
    if (window.innerWidth > 841) {
        wimg1.classList.remove('wimg1')
    } else {
        if (window.innerWidth < 841 && window.pageYOffset > 7347) {
            wimg1.classList.add('wing1-show');
        }
        else if (window.innerWidth < 751 && window.pageYOffset > 6830) {
            wimg1.classList.add('wing1-show');
        }
        else if (window.innerWidth < 651 && window.pageYOffset > 6426) {
            wimg1.classList.add('wing1-show');
        }
        else if (window.innerWidth < 551 && window.pageYOffset > 6075) {
            wimg1.classList.add('wing1-show');
        }
        else if (window.innerWidth < 471 && window.pageYOffset > 5678) {
            wimg1.classList.add('wing1-show');
        }
        else if (window.innerWidth < 371 && window.pageYOffset > 5400) {
            wimg1.classList.add('wing1-show');
        }
        else {
            wimg1.classList.remove('wing1-show');
        }
    }
})


window.addEventListener('scroll', () => {
    if (window.innerWidth > 841) {
        wimg2.classList.remove('wimg2')
    } else {
        if (window.innerWidth < 841 && window.pageYOffset > 8163) {
            wimg2.classList.add('wing2-show');
        }
        else if (window.innerWidth < 751 && window.pageYOffset > 7604) {
            wimg2.classList.add('wing2-show');
        }
        else if (window.innerWidth < 651 && window.pageYOffset > 7141) {
            wimg2.classList.add('wing2-show');
        }
        else if (window.innerWidth < 551 && window.pageYOffset > 6675) {
            wimg2.classList.add('wing2-show');
        }
        else if (window.innerWidth < 471 && window.pageYOffset > 6178) {
            wimg2.classList.add('wing2-show');
        }
        else if (window.innerWidth < 371 && window.pageYOffset > 6078) {
            wimg2.classList.add('wing2-show');
        }
        else {
            wimg2.classList.remove('wing2-show');
        }
    }
})


window.addEventListener('scroll', () => {
    if (window.innerWidth > 841) {
        wimg3.classList.remove('wimg3')
    } else {
        if (window.innerWidth < 841 && window.pageYOffset > 8980) {
            wimg3.classList.add('wing3-show');
        }
        else if (window.innerWidth < 751 && window.pageYOffset > 8390) {
            wimg3.classList.add('wing3-show');
        }
        else if (window.innerWidth < 651 && window.pageYOffset > 7826) {
            wimg3.classList.add('wing3-show');
        }
        else if (window.innerWidth < 471 && window.pageYOffset > 6778) {
            wimg3.classList.add('wing3-show');
        }
        else if (window.innerWidth < 371 && window.pageYOffset > 6578) {
            wimg3.classList.add('wing3-show');
        }
        else {
            wimg3.classList.remove('wing3-show');

        }
    }
})

window.addEventListener('scroll', () => {
    if (window.innerWidth > 841) {
        wimg4.classList.remove('wimg4')
    } else {
        if (window.innerWidth < 841 && window.pageYOffset > 9081) {
            wimg4.classList.add('wing4-show');
        }
        else if (window.innerWidth < 751 && window.pageYOffset > 9191) {
            wimg4.classList.add('wing4-show');
        }
        else if (window.innerWidth < 651 && window.pageYOffset > 8429) {
            wimg4.classList.add('wing4-show');
        }
        else if (window.innerWidth < 551 && window.pageYOffset > 7852) {
            wimg4.classList.add('wing4-show');
        }
        else if (window.innerWidth < 471 && window.pageYOffset > 7350) {
            wimg4.classList.add('wing4-show');
        }
        else if (window.innerWidth < 371 && window.pageYOffset > 6850) {
            wimg4.classList.add('wing4-show');
        }
        else {
            wimg4.classList.remove('wing4-show');

        }
    }
})











const wing = document.querySelector('.women-img');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 2400) {
        wing.classList.add('wing-show');
    } else {
        wing.classList.remove('wing-show');
        // wing.classList.remove('women-img1');
    }
})







const secAteHadding = document.querySelector('.sec-ate-hadding-container');

window.addEventListener('scroll', () => {
    if (window.innerWidth > 841 && window.pageYOffset > 2700) {
        secAteHadding.classList.add('sec-ate-hadding-container-show');
    }
    else if (window.innerWidth < 841 && window.pageYOffset > 10611) {
        secAteHadding.classList.add('sec-ate-hadding-container-show');
    }
    else if (window.innerWidth < 781 && window.pageYOffset > 10213) {
        secAteHadding.classList.add('sec-ate-hadding-container-show');
    }
    else if (window.innerWidth < 721 && window.pageYOffset > 9598) {
        secAteHadding.classList.add('sec-ate-hadding-container-show');
    }
    else if (window.innerWidth < 651 && window.pageYOffset > 9174) {
        secAteHadding.classList.add('sec-ate-hadding-container-show');
    }
    else if (window.innerWidth < 591 && window.pageYOffset > 8760) {
        secAteHadding.classList.add('sec-ate-hadding-container-show');
    }
    else if (window.innerWidth < 521 && window.pageYOffset > 8300) {
        secAteHadding.classList.add('sec-ate-hadding-container-show');
    }
    else if (window.innerWidth < 481 && window.pageYOffset > 7900) {
        secAteHadding.classList.add('sec-ate-hadding-container-show');
    }
    else if (window.innerWidth < 381 && window.pageYOffset > 7100) {
        secAteHadding.classList.add('sec-ate-hadding-container-show');
    }
    else {
        secAteHadding.classList.remove('sec-ate-hadding-container-show');

    }
})




const StandardPack = document.querySelector('.slide-right1');

window.addEventListener('scroll', () => {
    if (window.innerWidth > 841 && window.pageYOffset > 2900) {
        StandardPack.classList.add('slide-right1-show');
    } else if (window.innerWidth < 841 && window.pageYOffset > 10515) {
        StandardPack.classList.add('slide-right1-show');
    }
    else if (window.innerWidth < 781 && window.pageYOffset > 10300) {
        StandardPack.classList.add('slide-right1-show');
    }

    else if (window.innerWidth < 721 && window.pageYOffset > 9698) {
        StandardPack.classList.add('slide-right1-show');
    }
    else if (window.innerWidth < 651 && window.pageYOffset > 9274) {
        StandardPack.classList.add('slide-right1-show');
    }
    else if (window.innerWidth < 591 && window.pageYOffset > 8860) {
        StandardPack.classList.add('slide-right1-show');
    }
    else if (window.innerWidth < 521 && window.pageYOffset > 8400) {
        StandardPack.classList.add('slide-right1-show');
    }
    else if (window.innerWidth < 481 && window.pageYOffset > 8000) {
        StandardPack.classList.add('slide-right1-show');
    }
    else if (window.innerWidth < 381 && window.pageYOffset > 7400) {
        StandardPack.classList.add('slide-right1-show');
    }
    else {
        StandardPack.classList.remove('slide-right1-show');
    }
})


const StandardPack2 = document.querySelector('.slide-right2');

window.addEventListener('scroll', () => {
    if (window.innerWidth > 841 && window.pageYOffset > 2900) {
        StandardPack2.classList.add('slide-right2-show');
    } else if (window.innerWidth < 841 && window.pageYOffset > 11023) {
        StandardPack2.classList.add('slide-right2-show');
    }
    else if (window.innerWidth < 781 && window.pageYOffset > 10700) {
        StandardPack2.classList.add('slide-right2-show');
    }

    else if (window.innerWidth < 721 && window.pageYOffset > 10000) {
        StandardPack2.classList.add('slide-right2-show');
    }
    else if (window.innerWidth < 651 && window.pageYOffset > 9574) {
        StandardPack2.classList.add('slide-right2-show');
    }
    else if (window.innerWidth < 591 && window.pageYOffset > 9260) {
        StandardPack2.classList.add('slide-right2-show');
    }
    else if (window.innerWidth < 521 && window.pageYOffset > 8700) {
        StandardPack2.classList.add('slide-right2-show');
    }
    else if (window.innerWidth < 481 && window.pageYOffset > 8300) {
        StandardPack2.classList.add('slide-right2-show');
    }
    else if (window.innerWidth < 381 && window.pageYOffset > 7880) {
        StandardPack2.classList.add('slide-right2-show');
    }
    else {
        StandardPack2.classList.remove('slide-right2-show');

    }
})




const StandardPack3 = document.querySelector('.slide-right3');

window.addEventListener('scroll', () => {
    if (window.innerWidth > 841 && window.pageYOffset > 2900) {
        StandardPack3.classList.add('slide-right3-show');
    }
    else if (window.innerWidth < 841 && window.pageYOffset > 11300) {
        StandardPack3.classList.add('slide-right3-show');
    }
    else if (window.innerWidth < 781 && window.pageYOffset > 11000) {
        StandardPack3.classList.add('slide-right3-show');
    }

    else if (window.innerWidth < 721 && window.pageYOffset > 10300) {
        StandardPack3.classList.add('slide-right3-show');
    }
    else if (window.innerWidth < 651 && window.pageYOffset > 9874) {
        StandardPack3.classList.add('slide-right3-show');
    }
    else if (window.innerWidth < 591 && window.pageYOffset > 9560) {
        StandardPack3.classList.add('slide-right3-show');
    }
    else if (window.innerWidth < 521 && window.pageYOffset > 9000) {
        StandardPack3.classList.add('slide-right3-show');
    }
    else if (window.innerWidth < 481 && window.pageYOffset > 8600) {
        StandardPack3.classList.add('slide-right3-show');
    }
    else if (window.innerWidth < 381 && window.pageYOffset > 8100) {
        StandardPack3.classList.add('slide-right3-show');
    }
    else {
        StandardPack3.classList.remove('slide-right3-show');

    }
})



const SecNine = document.querySelector('.sec-nine-details-container');


window.addEventListener('scroll', () => {
    if (window.innerWidth > 841 && window.pageYOffset > 3450) {
        SecNine.classList.add('sec-nine-details-container-show');
    }

    else if (window.innerWidth < 841 && window.pageYOffset > 12000) {
        SecNine.classList.add('sec-nine-details-container-show');
    }
    else if (window.innerWidth < 781 && window.pageYOffset > 11480) {
        SecNine.classList.add('sec-nine-details-container-show');
    }

    else if (window.innerWidth < 721 && window.pageYOffset > 10900) {
        SecNine.classList.add('sec-nine-details-container-show');
    }
    else if (window.innerWidth < 651 && window.pageYOffset > 10474) {
        SecNine.classList.add('sec-nine-details-container-show');
    }
    else if (window.innerWidth < 591 && window.pageYOffset > 10160) {
        SecNine.classList.add('sec-nine-details-container-show');
    }
    else if (window.innerWidth < 521 && window.pageYOffset > 9600) {
        SecNine.classList.add('sec-nine-details-container-show');
    }
    else if (window.innerWidth < 481 && window.pageYOffset > 9200) {
        SecNine.classList.add('sec-nine-details-container-show');
    }
    else if (window.innerWidth < 381 && window.pageYOffset > 8440) {
        SecNine.classList.add('sec-nine-details-container-show');
    }
    else {
        SecNine.classList.remove('sec-nine-details-container-show');

    }
})



const SecNineFormContainer = document.querySelector('.form-container');


window.addEventListener('scroll', () => {
    if (window.innerWidth > 841 && window.pageYOffset > 3450) {
        SecNineFormContainer.classList.add('form-container-show');
    }
    else if (window.innerWidth < 841 && window.pageYOffset > 12600) {
        SecNineFormContainer.classList.add('form-container-show');
    }
    else if (window.innerWidth < 781 && window.pageYOffset > 11710) {
        SecNineFormContainer.classList.add('form-container-show');
    }
    else if (window.innerWidth < 721 && window.pageYOffset > 11200) {
        SecNineFormContainer.classList.add('form-container-show');
    }
    else if (window.innerWidth < 651 && window.pageYOffset > 10774) {
        SecNineFormContainer.classList.add('form-container-show');
    }
    else if (window.innerWidth < 591 && window.pageYOffset > 10460) {
        SecNineFormContainer.classList.add('form-container-show');
    }
    else if (window.innerWidth < 521 && window.pageYOffset > 9900) {
        SecNineFormContainer.classList.add('form-container-show');
    }
    else if (window.innerWidth < 481 && window.pageYOffset > 9500) {
        SecNineFormContainer.classList.add('form-container-show');
    }
    else if (window.innerWidth < 381 && window.pageYOffset > 9000) {
        SecNineFormContainer.classList.add('form-container-show');
    }
    else {
        SecNineFormContainer.classList.remove('form-container-show');

    }
})





const SecTanHadding = document.querySelector('.about-us');


window.addEventListener('scroll', () => {
    if (window.innerWidth > 841 && window.pageYOffset > 3850) {
        SecTanHadding.classList.add('about-us-show');
    } else if (window.innerWidth < 841 && window.pageYOffset > 12800) {
        SecTanHadding.classList.add('about-us-show');
    }

    else if (window.innerWidth < 781 && window.pageYOffset > 11910) {
        SecTanHadding.classList.add('about-us-show');
    }
    else if (window.innerWidth < 721 && window.pageYOffset > 11400) {
        SecTanHadding.classList.add('about-us-show');
    }
    else if (window.innerWidth < 651 && window.pageYOffset > 10974) {
        SecTanHadding.classList.add('about-us-show');
    }
    else if (window.innerWidth < 591 && window.pageYOffset > 10660) {
        SecTanHadding.classList.add('about-us-show');
    }
    else if (window.innerWidth < 521 && window.pageYOffset > 10100) {
        SecTanHadding.classList.add('about-us-show');
    }
    else if (window.innerWidth < 481 && window.pageYOffset > 10000) {
        SecTanHadding.classList.add('about-us-show');
    }
    else if (window.innerWidth < 381 && window.pageYOffset > 9500) {
        SecTanHadding.classList.add('about-us-show');
    }

    else {
        SecTanHadding.classList.remove('about-us-show');

    }
})



const SecTanAboutBox1 = document.querySelector('.about-box1');


window.addEventListener('scroll', () => {
    if (window.innerWidth > 841 && window.pageYOffset > 4000) {
        SecTanAboutBox1.classList.add('about-box1-show');
    } else if (window.innerWidth < 841 && window.pageYOffset > 13000) {
        SecTanAboutBox1.classList.add('about-box1-show');
    }

    else if (window.innerWidth < 781 && window.pageYOffset > 12110) {
        SecTanAboutBox1.classList.add('about-box1-show');
    }
    else if (window.innerWidth < 721 && window.pageYOffset > 11600) {
        SecTanAboutBox1.classList.add('about-box1-show');
    }
    else if (window.innerWidth < 651 && window.pageYOffset > 11174) {
        SecTanAboutBox1.classList.add('about-box1-show');
    }
    else if (window.innerWidth < 591 && window.pageYOffset > 10860) {
        SecTanAboutBox1.classList.add('about-box1-show');
    }
    else if (window.innerWidth < 521 && window.pageYOffset > 10300) {
        SecTanAboutBox1.classList.add('about-box1-show');
    }
    else if (window.innerWidth < 481 && window.pageYOffset > 10200) {
        SecTanAboutBox1.classList.add('about-box1-show');
    }
    else if (window.innerWidth < 381 && window.pageYOffset > 9600) {
        SecTanAboutBox1.classList.add('about-box1-show');
    }

    else {
        SecTanAboutBox1.classList.remove('about-box1-show');

    }
})




const SecTanAboutBox2 = document.querySelector('.about-box2');


window.addEventListener('scroll', () => {
    if (window.innerWidth > 841 && window.pageYOffset > 4000) {
        SecTanAboutBox2.classList.add('about-box2-show');
    } else if (window.innerWidth < 841 && window.pageYOffset > 13365) {
        SecTanAboutBox2.classList.add('about-box2-show');
    }

    else if (window.innerWidth < 781 && window.pageYOffset > 12460) {
        SecTanAboutBox2.classList.add('about-box2-show');
    }
    else if (window.innerWidth < 721 && window.pageYOffset > 11950) {
        SecTanAboutBox2.classList.add('about-box2-show');
    }
    else if (window.innerWidth < 651 && window.pageYOffset > 11500) {
        SecTanAboutBox2.classList.add('about-box2-show');
    }
    else if (window.innerWidth < 591 && window.pageYOffset > 11150) {
        SecTanAboutBox2.classList.add('about-box2-show');
    }
    else if (window.innerWidth < 521 && window.pageYOffset > 10650) {
        SecTanAboutBox2.classList.add('about-box2-show');
    }
    else if (window.innerWidth < 481 && window.pageYOffset > 10550) {
        SecTanAboutBox2.classList.add('about-box2-show');
    }
    else if (window.innerWidth < 381 && window.pageYOffset > 9900) {
        SecTanAboutBox2.classList.add('about-box2-show');
    }
    else {
        SecTanAboutBox2.classList.remove('about-box2-show');

    }
})


// console.log(pageYOffset);



const secElevenTopHadding = document.querySelector('.eleven-top-hadding');

window.addEventListener('scroll', () => {
    if (window.innerWidth > 841 && window.pageYOffset > 4230) {
        secElevenTopHadding.classList.add('eleven-top-hadding-show');
    } else if (window.innerWidth < 841 && window.pageYOffset > 13570) {
        secElevenTopHadding.classList.add('eleven-top-hadding-show');
    }

    else if (window.innerWidth < 781 && window.pageYOffset > 12660) {
        secElevenTopHadding.classList.add('eleven-top-hadding-show');
    }
    else if (window.innerWidth < 721 && window.pageYOffset > 12150) {
        secElevenTopHadding.classList.add('eleven-top-hadding-show');
    }
    else if (window.innerWidth < 651 && window.pageYOffset > 11700) {
        secElevenTopHadding.classList.add('eleven-top-hadding-show');
    }
    else if (window.innerWidth < 591 && window.pageYOffset > 11350) {
        secElevenTopHadding.classList.add('eleven-top-hadding-show');
    }
    else if (window.innerWidth < 521 && window.pageYOffset > 10850) {
        secElevenTopHadding.classList.add('eleven-top-hadding-show');
    }
    else if (window.innerWidth < 481 && window.pageYOffset > 10750) {
        secElevenTopHadding.classList.add('eleven-top-hadding-show');
    }
    else if (window.innerWidth < 381 && window.pageYOffset > 10222) {
        secElevenTopHadding.classList.add('eleven-top-hadding-show');
    }
    else {
        secElevenTopHadding.classList.remove('eleven-top-hadding-show')

    }
})


const secElevenHadding1 = document.querySelector('.details-Hadding1')

window.addEventListener('scroll', () => {
    if (window.innerWidth > 841 && window.pageYOffset > 4400) {
        secElevenHadding1.classList.add('details-Hadding1-show');
    }
    else if (window.innerWidth < 841 && window.pageYOffset > 13773) {
        secElevenHadding1.classList.add('details-Hadding1-show');
    }

    else if (window.innerWidth < 781 && window.pageYOffset > 12860) {
        secElevenHadding1.classList.add('details-Hadding1-show');
    }
    else if (window.innerWidth < 721 && window.pageYOffset > 12350) {
        secElevenHadding1.classList.add('details-Hadding1-show');
    }
    else if (window.innerWidth < 651 && window.pageYOffset > 11900) {
        secElevenHadding1.classList.add('details-Hadding1-show');
    }
    else if (window.innerWidth < 591 && window.pageYOffset > 11550) {
        secElevenHadding1.classList.add('details-Hadding1-show');
    }
    else if (window.innerWidth < 521 && window.pageYOffset > 11050) {
        secElevenHadding1.classList.add('details-Hadding1-show');
    }
    else if (window.innerWidth < 481 && window.pageYOffset > 10950) {
        secElevenHadding1.classList.add('details-Hadding1-show');
    }
    else if (window.innerWidth < 381 && window.pageYOffset > 10322) {
        secElevenHadding1.classList.add('details-Hadding1-show');
    }
    else {
        secElevenHadding1.classList.remove('details-Hadding1-show');

    }
})


const secElevenHadding2 = document.querySelector('.details-Hadding')

window.addEventListener('scroll', () => {
    if (window.innerWidth > 841 && window.pageYOffset > 4500) {
        secElevenHadding2.classList.add('details-Hadding-show');
    }
    else if (window.innerWidth < 841 && window.pageYOffset > 13773) {
        secElevenHadding2.classList.add('details-Hadding-show');
    }


    else if (window.innerWidth < 781 && window.pageYOffset > 12860) {
        secElevenHadding2.classList.add('details-Hadding-show');
    }
    else if (window.innerWidth < 721 && window.pageYOffset > 12350) {
        secElevenHadding2.classList.add('details-Hadding-show');
    }
    else if (window.innerWidth < 651 && window.pageYOffset > 11900) {
        secElevenHadding2.classList.add('details-Hadding-show');
    }
    else if (window.innerWidth < 591 && window.pageYOffset > 11550) {
        secElevenHadding2.classList.add('details-Hadding-show');
    }
    else if (window.innerWidth < 521 && window.pageYOffset > 11050) {
        secElevenHadding2.classList.add('details-Hadding-show');
    }
    else if (window.innerWidth < 481 && window.pageYOffset > 10950) {
        secElevenHadding2.classList.add('details-Hadding-show');
    }
    else if (window.innerWidth < 381 && window.pageYOffset > 10322) {
        secElevenHadding2.classList.add('details-Hadding-show');
    }
    else {
        secElevenHadding2.classList.remove('details-Hadding-show');

    }
})



const secElevenHadding3 = document.querySelector('.details-Hadding2')

window.addEventListener('scroll', () => {
    if (window.innerWidth > 841 && window.pageYOffset > 4600) {
        secElevenHadding3.classList.add('details-Hadding2-show');
    }
    else if (window.innerWidth < 841 && window.pageYOffset > 13773) {
        secElevenHadding3.classList.add('details-Hadding2-show');
    }

    else if (window.innerWidth < 781 && window.pageYOffset > 12860) {
        secElevenHadding3.classList.add('details-Hadding2-show');
    }
    else if (window.innerWidth < 721 && window.pageYOffset > 12350) {
        secElevenHadding3.classList.add('details-Hadding2-show');
    }
    else if (window.innerWidth < 651 && window.pageYOffset > 11900) {
        secElevenHadding3.classList.add('details-Hadding2-show');
    }
    else if (window.innerWidth < 591 && window.pageYOffset > 11550) {
        secElevenHadding3.classList.add('details-Hadding2-show');
    }
    else if (window.innerWidth < 521 && window.pageYOffset > 11050) {
        secElevenHadding3.classList.add('details-Hadding2-show');
    }
    else if (window.innerWidth < 481 && window.pageYOffset > 10950) {
        secElevenHadding3.classList.add('details-Hadding2-show');
    }
    else if (window.innerWidth < 381 && window.pageYOffset > 10322) {
        secElevenHadding3.classList.add('details-Hadding2-show');
    }

    else {
        secElevenHadding3.classList.remove('details-Hadding2-show');

    }
})





const secElevenImg = document.querySelector('.eleven-img');

window.addEventListener('scroll', () => {
    if (window.innerWidth > 841 && window.pageYOffset > 4360) {
        secElevenImg.classList.add('eleven-img-show');
    }
    else if (window.innerWidth < 841 && window.pageYOffset > 14379) {
        secElevenImg.classList.add('eleven-img-show');
    }

    else if (window.innerWidth < 781 && window.pageYOffset > 13317) {
        secElevenImg.classList.add('eleven-img-show');
    }
    else if (window.innerWidth < 721 && window.pageYOffset > 12950) {
        secElevenImg.classList.add('eleven-img-show');
    }
    else if (window.innerWidth < 651 && window.pageYOffset > 12500) {
        secElevenImg.classList.add('eleven-img-show');
    }
    else if (window.innerWidth < 591 && window.pageYOffset > 12150) {
        secElevenImg.classList.add('eleven-img-show');
    }
    else if (window.innerWidth < 521 && window.pageYOffset > 11650) {
        secElevenImg.classList.add('eleven-img-show');
    }
    else if (window.innerWidth < 481 && window.pageYOffset > 11550) {
        secElevenImg.classList.add('eleven-img-show');
    }
    else if (window.innerWidth < 381 && window.pageYOffset > 10722) {
        secElevenImg.classList.add('eleven-img-show');
    }

    else {
        secElevenImg.classList.remove('eleven-img-show');
    }
})







const SecTwelHadding = document.querySelector('.sec-twel-hadding');

window.addEventListener('scroll', () => {
    if (window.innerWidth > 841 && window.pageYOffset > 4700) {
        SecTwelHadding.classList.add('sec-twel-hadding-show')
    }
    else if (window.innerWidth < 841 && window.pageYOffset > 14385) {
        SecTwelHadding.classList.add('sec-twel-hadding-show')
    }


    else if (window.innerWidth < 781 && window.pageYOffset > 13517) {
        SecTwelHadding.classList.add('sec-twel-hadding-show')
    }
    else if (window.innerWidth < 721 && window.pageYOffset > 13050) {
        SecTwelHadding.classList.add('sec-twel-hadding-show')
    }
    else if (window.innerWidth < 651 && window.pageYOffset > 12700) {
        SecTwelHadding.classList.add('sec-twel-hadding-show')
    }
    else if (window.innerWidth < 591 && window.pageYOffset > 12250) {
        SecTwelHadding.classList.add('sec-twel-hadding-show')
    }
    else if (window.innerWidth < 521 && window.pageYOffset > 11850) {
        SecTwelHadding.classList.add('sec-twel-hadding-show')
    }
    else if (window.innerWidth < 481 && window.pageYOffset > 11750) {
        SecTwelHadding.classList.add('sec-twel-hadding-show')
    }
    else if (window.innerWidth < 381 && window.pageYOffset > 11022) {
        SecTwelHadding.classList.add('sec-twel-hadding-show')
    }
    else {
        SecTwelHadding.classList.remove('sec-twel-hadding-show')

    }
})





const SecTwelJobs = document.querySelector('.jobs');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 4900) {
        SecTwelJobs.classList.add('jobs-show');
    } else {
        SecTwelJobs.classList.remove('jobs-show');
    }
})


const SecTwelJobs2 = document.querySelector('.jobs2');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 5100) {
        SecTwelJobs2.classList.add('jobs2-show')
    } else {
        SecTwelJobs2.classList.remove('jobs2-show')
    }
})



const b1 = document.querySelector('.b1');
const b2 = document.querySelector('.b2');
const b3 = document.querySelector('.b3');
const b4 = document.querySelector('.b4');
const b5 = document.querySelector('.b5');
const b6 = document.querySelector('.b6');
const b7 = document.querySelector('.b7');
const b8 = document.querySelector('.b8');

window.addEventListener('scroll', () => {
    if (window.innerWidth > 841) {
        b1.classList.remove('b');
    } else {
        if (window.innerWidth < 841 && window.pageYOffset > 14287) {
            b1.classList.add('box-show');
        }


        else if (window.innerWidth < 781 && window.pageYOffset > 14000) {
            b1.classList.add('box-show');
        }
        else if (window.innerWidth < 721 && window.pageYOffset > 13700) {
            b1.classList.add('box-show');
        }
        else if (window.innerWidth < 651 && window.pageYOffset > 13000) {
            b1.classList.add('box-show');
        }
        else if (window.innerWidth < 591 && window.pageYOffset > 12633) {
            b1.classList.add('box-show');
        }
        else if (window.innerWidth < 521 && window.pageYOffset > 12202) {
            b1.classList.add('box-show');
        }
        else if (window.innerWidth < 481 && window.pageYOffset > 11829) {
            b1.classList.add('box-show');
        }
        else if (window.innerWidth < 381 && window.pageYOffset > 11088) {
            b1.classList.add('box-show');
        }
        else {
            b1.classList.remove('box-show');
        }
    }
})







window.addEventListener('scroll', () => {
    if (window.innerWidth > 841) {
        b2.classList.remove('b');
    } else {
        if (window.innerWidth < 841 && window.pageYOffset > 14693) {
            b2.classList.add('box-show');
        }

        else if (window.innerWidth < 781 && window.pageYOffset > 14400) {
            b2.classList.add('box-show');
        }
        else if (window.innerWidth < 721 && window.pageYOffset > 14100) {
            b2.classList.add('box-show');
        }
        else if (window.innerWidth < 651 && window.pageYOffset > 13400) {
            b2.classList.add('box-show');
        }
        else if (window.innerWidth < 591 && window.pageYOffset > 13000) {
            b2.classList.add('box-show');
        }
        else if (window.innerWidth < 521 && window.pageYOffset > 12600) {
            b2.classList.add('box-show');
        }
        else if (window.innerWidth < 481 && window.pageYOffset > 12229) {
            b2.classList.add('box-show');
        }
        else if (window.innerWidth < 381 && window.pageYOffset > 11388) {
            b2.classList.add('box-show');
        }
        else {
            b2.classList.remove('box-show');
        }
    }
})





window.addEventListener('scroll', () => {
    if (window.innerWidth > 841) {
        b3.classList.remove('b');
    } else {
        if (window.innerWidth < 841 && window.pageYOffset > 14900) {
            b3.classList.add('box-show');
        }

        else if (window.innerWidth < 781 && window.pageYOffset > 14800) {
            b3.classList.add('box-show');
        }
        else if (window.innerWidth < 721 && window.pageYOffset > 14500) {
            b3.classList.add('box-show');
        }
        else if (window.innerWidth < 651 && window.pageYOffset > 13800) {
            b3.classList.add('box-show');
        }
        else if (window.innerWidth < 591 && window.pageYOffset > 13400) {
            b3.classList.add('box-show');
        }
        else if (window.innerWidth < 521 && window.pageYOffset > 13000) {
            b3.classList.add('box-show');
        }
        else if (window.innerWidth < 481 && window.pageYOffset > 12429) {
            b3.classList.add('box-show');
        }
        else if (window.innerWidth < 381 && window.pageYOffset > 11652) {
            b3.classList.add('box-show');
        }

        else {
            b3.classList.remove('box-show');
        }
    }
})




window.addEventListener('scroll', () => {
    if (window.innerWidth > 841) {
        b4.classList.remove('b');
    } else {
        if (window.innerWidth < 841 && window.pageYOffset > 15200) {
            b4.classList.add('box-show');
        }

        else if (window.innerWidth < 781 && window.pageYOffset > 15200) {
            b4.classList.add('box-show');
        }
        else if (window.innerWidth < 721 && window.pageYOffset > 14900) {
            b4.classList.add('box-show');
        }
        else if (window.innerWidth < 651 && window.pageYOffset > 14200) {
            b4.classList.add('box-show');
        }
        else if (window.innerWidth < 591 && window.pageYOffset > 13800) {
            b4.classList.add('box-show');
        }
        else if (window.innerWidth < 521 && window.pageYOffset > 13400) {
            b4.classList.add('box-show');
        }
        else if (window.innerWidth < 481 && window.pageYOffset > 12829) {
            b4.classList.add('box-show');
        }
        else if (window.innerWidth < 381 && window.pageYOffset > 11930) {
            b4.classList.add('box-show');
        }

        else {
            b4.classList.remove('box-show');
        }
    }
})



window.addEventListener('scroll', () => {
    if (window.innerWidth > 841) {
        b5.classList.remove('b');
    } else {
        if (window.innerWidth < 841 && window.pageYOffset > 15500) {
            b5.classList.add('box-show');
        }

        
        else if (window.innerWidth < 781 && window.pageYOffset > 15500) {
            b5.classList.add('box-show');
        }
        else if (window.innerWidth < 721 && window.pageYOffset > 15200) {
            b5.classList.add('box-show');
        }
        else if (window.innerWidth < 651 && window.pageYOffset > 14500) {
            b5.classList.add('box-show');
        }
        else if (window.innerWidth < 591 && window.pageYOffset > 14100) {
            b5.classList.add('box-show');
        }
        else if (window.innerWidth < 521 && window.pageYOffset > 13700) {
            b5.classList.add('box-show');
        }
        else if (window.innerWidth < 481 && window.pageYOffset > 13129) {
            b5.classList.add('box-show');
        }
        else if (window.innerWidth < 381 && window.pageYOffset > 12177) {
            b5.classList.add('box-show');
        }

        else {
            b5.classList.remove('box-show');
        }
    }
})



window.addEventListener('scroll', () => {
    if (window.innerWidth > 841) {
        b6.classList.remove('b');
    } else {
        if (window.innerWidth < 841 && window.pageYOffset > 15800) {
            b6.classList.add('box-show');
        }


       
        else if (window.innerWidth < 781 && window.pageYOffset > 15600) {
            b6.classList.add('box-show');
        }
        else if (window.innerWidth < 721 && window.pageYOffset > 15300) {
            b6.classList.add('box-show');
        }
        else if (window.innerWidth < 651 && window.pageYOffset > 14600) {
            b6.classList.add('box-show');
        }
        else if (window.innerWidth < 591 && window.pageYOffset > 14200) {
            b6.classList.add('box-show');
        }
        else if (window.innerWidth < 521 && window.pageYOffset > 13800) {
            b6.classList.add('box-show');
        }
        else if (window.innerWidth < 481 && window.pageYOffset > 13229) {
            b6.classList.add('box-show');
        }
        else if (window.innerWidth < 381 && window.pageYOffset > 12476) {
            b6.classList.add('box-show');
        }
        else {
            b6.classList.remove('box-show');
        }
    }
})



window.addEventListener('scroll', () => {
    if (window.innerWidth > 841) {
        b7.classList.remove('b');
    } else {
        if (window.innerWidth < 841 && window.pageYOffset > 16100) {
            b7.classList.add('box-show');
        }

        else if (window.innerWidth < 781 && window.pageYOffset > 15800) {
            b7.classList.add('box-show');
        }
        else if (window.innerWidth < 721 && window.pageYOffset > 15500) {
            b7.classList.add('box-show');
        }
        else if (window.innerWidth < 651 && window.pageYOffset > 14800) {
            b7.classList.add('box-show');
        }
        else if (window.innerWidth < 591 && window.pageYOffset > 14400) {
            b7.classList.add('box-show');
        }
        else if (window.innerWidth < 521 && window.pageYOffset > 14000) {
            b7.classList.add('box-show');
        }
        else if (window.innerWidth < 481 && window.pageYOffset > 13629) {
            b7.classList.add('box-show');
        }
        else if (window.innerWidth < 381 && window.pageYOffset > 12463) {
            b7.classList.add('box-show');
        }
        

        else {
            b7.classList.remove('box-show');
        }
    }
})



window.addEventListener('scroll', () => {
    if (window.innerWidth > 841) {
        b8.classList.remove('b');
    } else {
        if (window.innerWidth < 841 && window.pageYOffset > 16400) {
            b8.classList.add('box-show');
        }

        else if (window.innerWidth < 781 && window.pageYOffset > 15900) {
            b8.classList.add('box-show');
        }
        else if (window.innerWidth < 721 && window.pageYOffset > 15600) {
            b8.classList.add('box-show');
        }
        else if (window.innerWidth < 651 && window.pageYOffset > 14900) {
            b8.classList.add('box-show');
        }
        else if (window.innerWidth < 591 && window.pageYOffset > 14500) {
            b8.classList.add('box-show');
        }
        else if (window.innerWidth < 521 && window.pageYOffset > 14100) {
            b8.classList.add('box-show');
        }
        else if (window.innerWidth < 481 && window.pageYOffset > 13729) {
            b8.classList.add('box-show');
        }
        else if (window.innerWidth < 481 && window.pageYOffset > 12735) {
            b8.classList.add('box-show');
        }
        else {
            b8.classList.remove('box-show');
        }
    }
})
























// const box  = document.querySelector('.box1');

// box.addEventListener('mouseover' , () =>{
//     if(event.type == 'mouseover'){
//     box.style.background = 'white';

//     }else if(event.type == 'mouseout'){
//     box.style.background = '#1732A4';
//     }
// })

//3450
// console.log(pageYOffset);
// console.log(pageXOffset);
