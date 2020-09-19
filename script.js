$(document).ready(function(){
    $('#card-result').hide();
    $('body').hide();
    $('body').fadeIn(3000);
    $('form').submit((e) => { 
        e.preventDefault();
    });

    $( '.slider-weight' ).slider({
        animate: true,
        range: 'min',
        value: 0,
        min: 1,
        max: 200,
        step: 0.5,
        slide: function( event, ui ) {
            $( '#slider-weight-result' ).html(ui.value);
        },
     
        change: function(event, ui) {
            $('#znch-weight').attr('value', ui.value);
        }
     
    });

    $( '.slider-height' ).slider({
        animate: true,
        range: 'min',
        value: 0,
        min: 1,
        max: 2.20,
        step: 0.005,
        slide: function( event, ui ) {
            $( '#slider-height-result' ).html(ui.value);
        },
     
        change: function(event, ui) {
            $('#znch-height').attr('value', ui.value);
        }
    });

    $('#btn-Check').click(() => {
        let result = calculate($( '#slider-weight-result' ).html(), $( '#slider-height-result' ).html())
        result[0] ? $('#card-result').css('backgroundColor', '#A2D729') : $('#card-result').css('backgroundColor', '#FA824C');
        $('#card-result h2').text(result[1])
        $('#card-result').fadeIn('3s');
    })
});

const calculate = (weight, height) => {
    const result = parseFloat((parseFloat(weight)/(parseFloat(height)**2)).toFixed(2))
    if (result < 11) {
        return [false, 'Очень смешно, ахахахахвхвхвхв))), Норамльные цифры вводи.']
    }
    else if (result <= 16) {
        return [false, `Твой Имт равен ${result}, это значит, что ты очень худой. У тебя Выраженный дефицит массы тела`]
    }
    else if (result <= 18.5) {
        return [false, `Твой ИMT равен ${result}, это значит, что ты худоват. У тебя Небольшой дефицит массы тела`]
    }
    else if (result < 25) {
        return [true, `Твой ИMT равен ${result}, это Абсолютная Норма. Поздравляю!`]
    }
    else if (result <= 30) {
        return [true, `Твой ИMT равен ${result}, Ты крепкий, но не толстый, можешь быть спокоен.`]
    }
    else if (result <= 35) {
        return [false, `Твой ИMT равен ${result}, Ты Полноват, тянешь на ожирение первой степени, извини родной, похудей немножко, Я уверен ты сможешь.`]
    }
    else if (result <= 40) {
        return [false ,`Твой ИMT равен ${result}, Ты Пухленький, тянешь на ожирение второй степени, извини друг, похудей, Я думаю ты сможешь.`]
    }
    else if (result > 40 && result < 100) {
        return [false, `Твой ИMT равен ${result}, Ты Толстенький, тянешь на ожирение третьей степени (морбидное), извини друг, похудей много, Наверное ты сможешь.`]
    }
    else {
        return [false, 'Очень смешно, ахахахахвхвхвхв))), Норамльные цифры вводи.']
    }
}