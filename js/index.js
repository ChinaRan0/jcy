$(document).ready(function () {
    $('#dateNumber').hide();
    $('#timeNumber').hide();
    var date = new Date();
    let nongli = solar2lunar(date.getFullYear(), date.getMonth() + 1, date.getDate());
    $('#year').text(nongli.gzYear + '年');
    $('#month').text(nongli.IMonthCn);
    $('#day').text(nongli.IDayCn);
    $('#hours').text(date.getHours() + '点');
    $('#yearz').text(nongli.gzYear);
    $('#monthz').text(nongli.gzMonth);
    $('#dayz').text(nongli.gzDay);
    $('#hoursz').text(getDizhi(date.getHours()) + '时');
    $('#hourszZ').text(getZiTiangan() + getDizhi(date.getHours()));
    $('#yeark').text(getXunKong(nongli.gzYear.substring(0, 1), nongli.gzYear.substring(1, 2)));
    $('#monthk').text(getXunKong(nongli.gzMonth.substring(0, 1), nongli.gzMonth.substring(1, 2)));
    $('#dayk').text(getXunKong(nongli.gzDay.substring(0, 1), nongli.gzDay.substring(1, 2)));
    $('#hoursk').text(getXunKong(getZiTiangan(), getDizhi(date.getHours())));
    $('#start').click(function () {
        $('.ri').remove();
        $('.shi').remove();
        if ($('#dateStart').is(':checked')) {
            if ($('#dateNumber').val() == null || $('#dateNumber').val().trim() == '' || $('#dateNumber').val() == undefined) {
                return false;
            }

            if ($('#timeNumber').val() == null || $('#timeNumber').val().trim() == '' || $('#timeNumber').val() == undefined) {
                return false;
            }
            nongli = solar2lunar($('#dateNumber').val().split('-')[0], $('#dateNumber').val().split('-')[1], $('#dateNumber').val().split('-')[2]);
            $('#year').text(nongli.gzYear + '年');
            $('#month').text(nongli.IMonthCn);
            $('#day').text(nongli.IDayCn);
            $('#hours').text($('#timeNumber').val().split(':')[0] + '点');
            $('#yearz').text(nongli.gzYear);
            $('#monthz').text(nongli.gzMonth);
            $('#dayz').text(nongli.gzDay);
            $('#hoursz').text(getDizhi($('#timeNumber').val().split(':')[0]) + '时');
            $('#hourszZ').text(getZiTiangan() + getDizhi($('#timeNumber').val().split(':')[0]));
            $('#yeark').text(getXunKong(nongli.gzYear.substring(0, 1), nongli.gzYear.substring(1, 2)));
            $('#monthk').text(getXunKong(nongli.gzMonth.substring(0, 1), nongli.gzMonth.substring(1, 2)));
            $('#dayk').text(getXunKong(nongli.gzDay.substring(0, 1), nongli.gzDay.substring(1, 2)));
            $('#hoursk').text(getXunKong(getZiTiangan(), getDizhi($('#timeNumber').val().split(':')[0])));
            var rNumber = $('#dateNumber').val().split('-')[2];
            if (rNumber == null || rNumber.trim() == '' || rNumber == undefined) {
                return false;
            }
            $('#canggan').css('display', 'initial');
            $('.content').css('display', 'contents')
            if (rNumber > 6) {
                rNumber = rNumber % 6
            }
            // 时落宫
            var sNumber = getNumberByDizhi(getDizhi($('#timeNumber').val().split(':')[0]));
            sNumber += rNumber - 1;
            if (sNumber > 6) {
                sNumber = sNumber % 6
            }
            var rluogong = rNumber == 0 ? '空亡宫' : getGong(parseInt(rNumber));
            var sluogong = sNumber == 0 ? '空亡宫' : getGong(parseInt(sNumber));
            riluogong(rluogong);
            shiluogong(sluogong);
            riluogong(rluogong);
        } else {
            date = new Date();
            nongli = solar2lunar(date.getFullYear(), date.getMonth() + 1, date.getDate());
            $('#year').text(nongli.gzYear + '年');
            $('#month').text(nongli.IMonthCn);
            $('#day').text(nongli.IDayCn);
            $('#hours').text(date.getHours() + '点');
            $('#yearz').text(nongli.gzYear);
            $('#monthz').text(nongli.gzMonth);
            $('#dayz').text(nongli.gzDay);
            $('#hoursz').text(getDizhi(date.getHours()) + '时');
            $('#hourszZ').text(getZiTiangan() + getDizhi(date.getHours()));
            $('#yeark').text(getXunKong(nongli.gzYear.substring(0, 1), nongli.gzYear.substring(1, 2)));
            $('#monthk').text(getXunKong(nongli.gzMonth.substring(0, 1), nongli.gzMonth.substring(1, 2)));
            $('#dayk').text(getXunKong(nongli.gzDay.substring(0, 1), nongli.gzDay.substring(1, 2)));
            $('#hoursk').text(getXunKong(getZiTiangan(), getDizhi(date.getHours())));
            var rNumber = $('#number').val();
            if (rNumber == null || rNumber.trim() == '' || rNumber == undefined) {
                return false;
            }
            $('#canggan').css('display', 'initial');
            $('.content').css('display', 'contents')
            if (rNumber > 6) {
                rNumber = rNumber % 6
            }
            // 时落宫
            var sNumber = getNumberByDizhi(getDizhi(date.getHours()));
            sNumber += rNumber - 1;
            if (sNumber > 6) {
                sNumber = sNumber % 6
            }
            var rluogong = rNumber == 0 ? '空亡宫' : getGong(parseInt(rNumber));
            var sluogong = sNumber == 0 ? '空亡宫' : getGong(parseInt(sNumber));
            riluogong(rluogong);
            shiluogong(sluogong);
            riluogong(rluogong);
        }
    })
    $('#canggan').click(function () {
        if ($('.dizhicanggan').css('display') == 'none') {
            $('.dizhicanggan').css('display', 'block');
        } else {
            $('.dizhicanggan').css('display', 'none');
        }
    })
})
;

function numberStart() {
    $('#number').show();
    $('#dateNumber').hide();
    $('#timeNumber').hide();
}

function dateStart() {
    $('#number').hide();
    $('#dateNumber').show();
    $('#timeNumber').show();
}

function getXunKong(tiangan, dizhi) {
    var tianganNumber = getNumberByTiangan(tiangan);
    var dizhiNumber = getNumberByDizhi(dizhi);
    var xunkong1 = dizhiNumber + (10 - tianganNumber + 1);
    var xunkong2 = xunkong1 + 1;
    xunkong1 = xunkong1 > 12 ? xunkong1 % 12 : xunkong1;
    xunkong2 = xunkong2 > 12 ? xunkong2 % 12 : xunkong2;
    return getDizhiByNumber(xunkong1) + getDizhiByNumber(xunkong2);
}

function riluogong(gong) {
    switch (gong) {
        case '大安宫':
            $('.daan .liuqin').append('<span class="ri" style="color: #00CED1"> 日</span>');
            $('.daan .wuxing').text("木");
            $('.liulian .wuxing').text("火");
            $('.suxi .wuxing').text("土");
            $('.chikou .wuxing').text("金");
            $('.xiaoji .wuxing').text("水");
            $('.kongwang .wuxing').text("空");
            $('.daan .wuxing').css('color', '#5c7a29')
            $('.liulian .wuxing').css('color', '#d93a49')
            $('.suxi .wuxing').css('color', '#6b473c')
            $('.chikou .wuxing').css('color', 'chocolate')
            $('.xioji .wuxing').css('color', '#426ab3')

            break;
        case '留恋宫':
            $('.liulian .liuqin').append('<span class="ri" style="color: #00CED1"> 日</span>');
            $('.daan .wuxing').text("空");
            $('.liulian .wuxing').text("木");
            $('.suxi .wuxing').text("火");
            $('.chikou .wuxing').text("土");
            $('.xiaoji .wuxing').text("金");
            $('.kongwang .wuxing').text("水");
            $('.liulian .wuxing').css('color', '#5c7a29')
            $('.suxi .wuxing').css('color', '#d93a49')
            $('.chikou .wuxing').css('color', '#6b473c')
            $('.xiaoji .wuxing').css('color', 'chocolate')
            $('.kongwang .wuxing').css('color', '#426ab3')
            break;
        case '速喜宫':
            $('.suxi .liuqin').append('<span class="ri" style="color: #00CED1"> 日</span>');
            $('.daan .wuxing').text("水");
            $('.liulian .wuxing').text("空");
            $('.suxi .wuxing').text("木");
            $('.chikou .wuxing').text("火");
            $('.xiaoji .wuxing').text("土");
            $('.kongwang .wuxing').text("金");
            $('.suxi .wuxing').css('color', '#5c7a29')
            $('.chikou .wuxing').css('color', '#d93a49')
            $('.xiaoji .wuxing').css('color', '#6b473c')
            $('.kongwang .wuxing').css('color', 'chocolate')
            $('.daan .wuxing').css('color', '#426ab3')

            break;
        case '赤口宫':
            $('.chikou .liuqin').append('<span class="ri" style="color: #00CED1"> 日</span>');
            $('.daan .wuxing').text("金");
            $('.liulian .wuxing').text("水");
            $('.suxi .wuxing').text("空");
            $('.chikou .wuxing').text("木");
            $('.xiaoji .wuxing').text("火");
            $('.kongwang .wuxing').text("土");
            $('.chikou .wuxing').css('color', '#5c7a29')
            $('.xiaoji .wuxing').css('color', '#d93a49')
            $('.kongwang .wuxing').css('color', '#6b473c')
            $('.daan .wuxing').css('color', 'chocolate')
            $('.liulian .wuxing').css('color', '#426ab3')

            break;
        case '小吉宫':
            $('.xiaoji .liuqin').append('<span class="ri" style="color: #00CED1"> 日</span>');
            $('.daan .wuxing').text("土");
            $('.liulian .wuxing').text("金");
            $('.suxi .wuxing').text("水");
            $('.chikou .wuxing').text("空");
            $('.xiaoji .wuxing').text("木");
            $('.kongwang .wuxing').text("火");
            $('.xiaoji .wuxing').css('color', '#5c7a29')
            $('.kongwang .wuxing').css('color', '#d93a49')
            $('.daan .wuxing').css('color', '#6b473c')
            $('.liulian .wuxing').css('color', 'chocolate')
            $('.suxi .wuxing').css('color', '#426ab3')
            break;
        case '空亡宫':
            $('.kongwang .liuqin').append('<span class="ri" style="color: #00CED1"> 日</span>');
            $('.daan .wuxing').text("火");
            $('.liulian .wuxing').text("土");
            $('.suxi .wuxing').text("金");
            $('.chikou .wuxing').text("水");
            $('.xiaoji .wuxing').text("空");
            $('.kongwang .wuxing').text("木");
            $('.kongwang .wuxing').css('color', '#5c7a29')
            $('.daan .wuxing').css('color', '#d93a49')
            $('.liulian .wuxing').css('color', '#6b473c')
            $('.suxi .wuxing').css('color', 'chocolate')
            $('.chikou .wuxing').css('color', '#426ab3')
            break;
    }
}

function setTiangan() {
    var liugongs = ['daan', 'liulian', 'suxi', 'chikou', 'xiaoji', 'kongwang'];
    var ziTiangan = getZiTiangan();
    var zishenDizhi = null;
    var zishenLuogong = null;
    for (var i = 0; i < liugongs.length; i++) {
        if ($('.' + liugongs[i] + ' .liuqin').text().substring(0, 2) == '自身') {
            zishenDizhi = $('.' + liugongs[i] + ' .dizhi').text();
            zishenLuogong = $('.' + liugongs[i] + ' .liugong').text().substring(0, 3);
            break;
        }
    }
    var zishenTianganNumber = getNumberByTiangan(ziTiangan) + getNumberByDizhi(zishenDizhi) - 1;
    if (zishenLuogong == '大安宫') {
        $('.daan .tiangan').text(getTianganByNumber(zishenTianganNumber));
        $('.liulian .tiangan').text(getTianganByNumber(zishenTianganNumber + 2));
        $('.suxi .tiangan').text(getTianganByNumber(zishenTianganNumber + 4));
        $('.chikou .tiangan').text(getTianganByNumber(zishenTianganNumber + 6));
        $('.xiaoji .tiangan').text(getTianganByNumber(zishenTianganNumber + 8));
        $('.kongwang .tiangan').text(getTianganByNumber(zishenTianganNumber + 10));
        // 9+
    } else if (zishenLuogong == '留恋宫') {
        $('.liulian .tiangan').text(getTianganByNumber(zishenTianganNumber));
        $('.suxi .tiangan').text(getTianganByNumber(zishenTianganNumber + 2));
        $('.chikou .tiangan').text(getTianganByNumber(zishenTianganNumber + 4));
        $('.xiaoji .tiangan').text(getTianganByNumber(zishenTianganNumber + 6));
        $('.kongwang .tiangan').text(getTianganByNumber(zishenTianganNumber + 8));
        $('.daan .tiangan').text(getTianganByNumber(zishenTianganNumber + 10));
    } else if (zishenLuogong == '速喜宫') {
        $('.suxi .tiangan').text(getTianganByNumber(zishenTianganNumber));
        $('.chikou .tiangan').text(getTianganByNumber(zishenTianganNumber + 2));
        $('.xiaoji .tiangan').text(getTianganByNumber(zishenTianganNumber + 4));
        $('.kongwang .tiangan').text(getTianganByNumber(zishenTianganNumber + 6));
        $('.daan .tiangan').text(getTianganByNumber(zishenTianganNumber + 8));
        $('.liulian .tiangan').text(getTianganByNumber(zishenTianganNumber + 10));
    } else if (zishenLuogong == '赤口宫') {
        $('.chikou .tiangan').text(getTianganByNumber(zishenTianganNumber));
        $('.xiaoji .tiangan').text(getTianganByNumber(zishenTianganNumber + 2));
        $('.kongwang .tiangan').text(getTianganByNumber(zishenTianganNumber + 4));
        $('.daan .tiangan').text(getTianganByNumber(zishenTianganNumber + 6));
        $('.liulian .tiangan').text(getTianganByNumber(zishenTianganNumber + 8));
        $('.suxi .tiangan').text(getTianganByNumber(zishenTianganNumber + 10));
    } else if (zishenLuogong == '小吉宫') {
        $('.xiaoji .tiangan').text(getTianganByNumber(zishenTianganNumber));
        $('.kongwang .tiangan').text(getTianganByNumber(zishenTianganNumber + 2));
        $('.daan .tiangan').text(getTianganByNumber(zishenTianganNumber + 4));
        $('.liulian .tiangan').text(getTianganByNumber(zishenTianganNumber + 6));
        $('.suxi .tiangan').text(getTianganByNumber(zishenTianganNumber + 8));
        $('.chikou .tiangan').text(getTianganByNumber(zishenTianganNumber + 10));
    } else if (zishenLuogong == '空亡宫') {
        $('.kongwang .tiangan').text(getTianganByNumber(zishenTianganNumber));
        $('.daan .tiangan').text(getTianganByNumber(zishenTianganNumber + 2));
        $('.liulian .tiangan').text(getTianganByNumber(zishenTianganNumber + 4));
        $('.suxi .tiangan').text(getTianganByNumber(zishenTianganNumber + 6));
        $('.chikou .tiangan').text(getTianganByNumber(zishenTianganNumber + 8));
        $('.xiaoji .tiangan').text(getTianganByNumber(zishenTianganNumber + 10));
    }
    setTianganColor('daan');
    setTianganColor('liulian');
    setTianganColor('suxi');
    setTianganColor('chikou');
    setTianganColor('xiaoji');
    setTianganColor('kongwang');
}

function shiluogong(gong) {
    var dizhi = getDizhi($('#hours').text().replace('点', ''));
    if (dizhi == '子' || dizhi == '午') {
        $('.daan .liushen').text("青龙");
        $('.liulian .liushen').text("朱雀");
        $('.suxi .liushen').text("勾陈");
        $('.chikou .liushen').text("白虎");
        $('.xiaoji .liushen').text("玄武");
        $('.kongwang .liushen').text("腾蛇");
    }

    if (dizhi == '丑' || dizhi == '未') {
        $('.daan .liushen').text("腾蛇");
        $('.liulian .liushen').text("青龙");
        $('.suxi .liushen').text("朱雀");
        $('.chikou .liushen').text("勾陈");
        $('.xiaoji .liushen').text("白虎");
        $('.kongwang .liushen').text("玄武");
    }

    if (dizhi == '寅' || dizhi == '申') {
        $('.daan .liushen').text("玄武");
        $('.liulian .liushen').text("腾蛇");
        $('.suxi .liushen').text("青龙");
        $('.chikou .liushen').text("朱雀");
        $('.xiaoji .liushen').text("勾陈");
        $('.kongwang .liushen').text("白虎");
    }

    if (dizhi == '卯' || dizhi == '酉') {
        $('.daan .liushen').text("白虎");
        $('.liulian .liushen').text("玄武");
        $('.suxi .liushen').text("腾蛇");
        $('.chikou .liushen').text("青龙");
        $('.xiaoji .liushen').text("朱雀");
        $('.kongwang .liushen').text("勾陈");
    }

    if (dizhi == '辰' || dizhi == '戌') {
        $('.daan .liushen').text("勾陈");
        $('.liulian .liushen').text("白虎");
        $('.suxi .liushen').text("玄武");
        $('.chikou .liushen').text("腾蛇");
        $('.xiaoji .liushen').text("青龙");
        $('.kongwang .liushen').text("朱雀");
    }

    if (dizhi == '巳' || dizhi == '亥') {
        $('.daan .liushen').text("朱雀");
        $('.liulian .liushen').text("勾陈");
        $('.suxi .liushen').text("白虎");
        $('.chikou .liushen').text("玄武");
        $('.xiaoji .liushen').text("腾蛇");
        $('.kongwang .liushen').text("青龙");
    }
    switch (gong) {
        case '大安宫':
            $('.daan .liuqin').text("自身");
            $('.daan .liuqin').append('<span class="shi" style="color: #00CED1"> 时</span>');
            $('.daan .dizhi').text(dizhi);
            var liulianDizhi = getDizhiByNumber((getNumberByDizhi(dizhi) + 2) > 12 ? (getNumberByDizhi(dizhi) + 2) % 12 : (getNumberByDizhi(dizhi) + 2))
            var suxiDizhi = getDizhiByNumber((getNumberByDizhi(dizhi) + 4) > 12 ? (getNumberByDizhi(dizhi) + 4) % 12 : (getNumberByDizhi(dizhi) + 4))
            var chikouDizhi = getDizhiByNumber((getNumberByDizhi(dizhi) + 6) > 12 ? (getNumberByDizhi(dizhi) + 6) % 12 : (getNumberByDizhi(dizhi) + 6))
            var xiaojiDizhi = getDizhiByNumber((getNumberByDizhi(dizhi) + 8) > 12 ? (getNumberByDizhi(dizhi) + 8) % 12 : (getNumberByDizhi(dizhi) + 8))
            var kongwangDizhi = getDizhiByNumber((getNumberByDizhi(dizhi) + 10) > 12 ? (getNumberByDizhi(dizhi) + 10) % 12 : (getNumberByDizhi(dizhi) + 10))
            $('.liulian .dizhi').text(liulianDizhi);
            $('.suxi .dizhi').text(suxiDizhi);
            $('.chikou .dizhi').text(chikouDizhi);
            $('.xiaoji .dizhi').text(xiaojiDizhi);
            $('.kongwang .dizhi').text(kongwangDizhi);
            $('.suxi .liuqin').text(getLiuqin(dizhi, suxiDizhi));
            $('.liulian .liuqin').text(getLiuqin(dizhi, liulianDizhi));
            $('.chikou .liuqin').text(getLiuqin(dizhi, chikouDizhi));
            $('.xiaoji .liuqin').text(getLiuqin(dizhi, xiaojiDizhi));
            $('.kongwang .liuqin').text(getLiuqin(dizhi, kongwangDizhi));
            setDizhiColor('daan', dizhi);
            setDizhiColor('liulian', liulianDizhi);
            setDizhiColor('suxi', suxiDizhi);
            setDizhiColor('chikou', chikouDizhi);
            setDizhiColor('xiaoji', xiaojiDizhi);
            setDizhiColor('kongwang', kongwangDizhi);

            setLiushenColor('daan');
            setLiushenColor('liulian');
            setLiushenColor('suxi');
            setLiushenColor('chikou');
            setLiushenColor('xiaoji');
            setLiushenColor('kongwang');

            setLiuqinColor('daan');
            setLiuqinColor('liulian');
            setLiuqinColor('suxi');
            setLiuqinColor('chikou');
            setLiuqinColor('xiaoji');
            setLiuqinColor('kongwang');
            setTiangan();

            break;
        case '留恋宫':
            $('.liulian .liuqin').text("自身");
            $('.liulian .liuqin').append('<span class="shi" style="color: #00CED1"> 时</span>');
            $('.liulian .dizhi').text(dizhi);
            var suxiDizhi = getDizhiByNumber((getNumberByDizhi(dizhi) + 2) > 12 ? (getNumberByDizhi(dizhi) + 2) % 12 : (getNumberByDizhi(dizhi) + 2))
            var chikouDizhi = getDizhiByNumber((getNumberByDizhi(dizhi) + 4) > 12 ? (getNumberByDizhi(dizhi) + 4) % 12 : (getNumberByDizhi(dizhi) + 4))
            var xiaojiDizhi = getDizhiByNumber((getNumberByDizhi(dizhi) + 6) > 12 ? (getNumberByDizhi(dizhi) + 6) % 12 : (getNumberByDizhi(dizhi) + 6))
            var kongwangDizhi = getDizhiByNumber((getNumberByDizhi(dizhi) + 8) > 12 ? (getNumberByDizhi(dizhi) + 8) % 12 : (getNumberByDizhi(dizhi) + 8))
            var daanDizhi = getDizhiByNumber((getNumberByDizhi(dizhi) + 10) > 12 ? (getNumberByDizhi(dizhi) + 10) % 12 : (getNumberByDizhi(dizhi) + 10))
            $('.daan .dizhi').text(daanDizhi);
            $('.suxi .dizhi').text(suxiDizhi);
            $('.chikou .dizhi').text(chikouDizhi);
            $('.xiaoji .dizhi').text(xiaojiDizhi);
            $('.kongwang .dizhi').text(kongwangDizhi);
            $('.suxi .liuqin').text(getLiuqin(dizhi, suxiDizhi));
            $('.daan .liuqin').text(getLiuqin(dizhi, daanDizhi));
            $('.chikou .liuqin').text(getLiuqin(dizhi, chikouDizhi));
            $('.xiaoji .liuqin').text(getLiuqin(dizhi, xiaojiDizhi));
            $('.kongwang .liuqin').text(getLiuqin(dizhi, kongwangDizhi));
            setDizhiColor('daan', daanDizhi);
            setDizhiColor('liulian', dizhi);
            setDizhiColor('suxi', suxiDizhi);
            setDizhiColor('chikou', chikouDizhi);
            setDizhiColor('xiaoji', xiaojiDizhi);
            setDizhiColor('kongwang', kongwangDizhi);
            setLiushenColor('daan');
            setLiushenColor('liulian');
            setLiushenColor('suxi');
            setLiushenColor('chikou');
            setLiushenColor('xiaoji');
            setLiushenColor('kongwang');
            setLiuqinColor('daan');
            setLiuqinColor('liulian');
            setLiuqinColor('suxi');
            setLiuqinColor('chikou');
            setLiuqinColor('xiaoji');
            setLiuqinColor('kongwang');
            setTiangan();
            break;
        case '速喜宫':
            $('.suxi .liuqin').text("自身")
            $('.suxi .liuqin').append('<span class="shi" style="color: #00CED1"> 时</span>');
            $('.suxi .dizhi').text(dizhi);
            var chikouDizhi = getDizhiByNumber((getNumberByDizhi(dizhi) + 2) > 12 ? (getNumberByDizhi(dizhi) + 2) % 12 : (getNumberByDizhi(dizhi) + 2))
            var xiaojiDizhi = getDizhiByNumber((getNumberByDizhi(dizhi) + 4) > 12 ? (getNumberByDizhi(dizhi) + 4) % 12 : (getNumberByDizhi(dizhi) + 4))
            var kongwangDizhi = getDizhiByNumber((getNumberByDizhi(dizhi) + 6) > 12 ? (getNumberByDizhi(dizhi) + 6) % 12 : (getNumberByDizhi(dizhi) + 6))
            var daanDizhi = getDizhiByNumber((getNumberByDizhi(dizhi) + 8) > 12 ? (getNumberByDizhi(dizhi) + 8) % 12 : (getNumberByDizhi(dizhi) + 8))
            var liulianDizhi = getDizhiByNumber((getNumberByDizhi(dizhi) + 10) > 12 ? (getNumberByDizhi(dizhi) + 10) % 12 : (getNumberByDizhi(dizhi) + 10))
            $('.daan .dizhi').text(daanDizhi);
            $('.liulian .dizhi').text(liulianDizhi);
            $('.chikou .dizhi').text(chikouDizhi);
            $('.xiaoji .dizhi').text(xiaojiDizhi);
            $('.kongwang .dizhi').text(kongwangDizhi);
            $('.liulian .liuqin').text(getLiuqin(dizhi, liulianDizhi));
            $('.daan .liuqin').text(getLiuqin(dizhi, daanDizhi));
            $('.chikou .liuqin').text(getLiuqin(dizhi, chikouDizhi));
            $('.xiaoji .liuqin').text(getLiuqin(dizhi, xiaojiDizhi));
            $('.kongwang .liuqin').text(getLiuqin(dizhi, kongwangDizhi));
            setDizhiColor('daan', daanDizhi);
            setDizhiColor('liulian', liulianDizhi);
            setDizhiColor('suxi', dizhi);
            setDizhiColor('chikou', chikouDizhi);
            setDizhiColor('xiaoji', xiaojiDizhi);
            setDizhiColor('kongwang', kongwangDizhi);
            setLiushenColor('daan');
            setLiushenColor('liulian');
            setLiushenColor('suxi');
            setLiushenColor('chikou');
            setLiushenColor('xiaoji');
            setLiushenColor('kongwang');
            setLiuqinColor('daan');
            setLiuqinColor('liulian');
            setLiuqinColor('suxi');
            setLiuqinColor('chikou');
            setLiuqinColor('xiaoji');
            setLiuqinColor('kongwang');
            setTiangan();
            break;
        case '赤口宫':
            $('.chikou .liuqin').text("自身");
            $('.chikou .liuqin').append('<span class="shi" style="color: #00CED1"> 时</span>');
            $('.chikou .dizhi').text(dizhi);
            var xiaojiDizhi = getDizhiByNumber((getNumberByDizhi(dizhi) + 2) > 12 ? (getNumberByDizhi(dizhi) + 2) % 12 : (getNumberByDizhi(dizhi) + 2))
            var kongwangDizhi = getDizhiByNumber((getNumberByDizhi(dizhi) + 4) > 12 ? (getNumberByDizhi(dizhi) + 4) % 12 : (getNumberByDizhi(dizhi) + 4))
            var daanDizhi = getDizhiByNumber((getNumberByDizhi(dizhi) + 6) > 12 ? (getNumberByDizhi(dizhi) + 6) % 12 : (getNumberByDizhi(dizhi) + 6))
            var liulianDizhi = getDizhiByNumber((getNumberByDizhi(dizhi) + 8) > 12 ? (getNumberByDizhi(dizhi) + 8) % 12 : (getNumberByDizhi(dizhi) + 8))
            var suxiDizhi = getDizhiByNumber((getNumberByDizhi(dizhi) + 10) > 12 ? (getNumberByDizhi(dizhi) + 10) % 12 : (getNumberByDizhi(dizhi) + 10))
            $('.daan .dizhi').text(daanDizhi);
            $('.liulian .dizhi').text(liulianDizhi);
            $('.suxi .dizhi').text(suxiDizhi);
            $('.xiaoji .dizhi').text(xiaojiDizhi);
            $('.kongwang .dizhi').text(kongwangDizhi);
            $('.suxi .liuqin').text(getLiuqin(dizhi, suxiDizhi));
            $('.liulian .liuqin').text(getLiuqin(dizhi, liulianDizhi));
            $('.xiaoji .liuqin').text(getLiuqin(dizhi, xiaojiDizhi));
            $('.kongwang .liuqin').text(getLiuqin(dizhi, kongwangDizhi));
            $('.daan .liuqin').text(getLiuqin(dizhi, daanDizhi));
            setDizhiColor('daan', daanDizhi);
            setDizhiColor('liulian', liulianDizhi);
            setDizhiColor('suxi', suxiDizhi);
            setDizhiColor('chikou', dizhi);
            setDizhiColor('xiaoji', xiaojiDizhi);
            setDizhiColor('kongwang', kongwangDizhi);
            setLiushenColor('daan');
            setLiushenColor('liulian');
            setLiushenColor('suxi');
            setLiushenColor('chikou');
            setLiushenColor('xiaoji');
            setLiushenColor('kongwang');
            setLiuqinColor('daan');
            setLiuqinColor('liulian');
            setLiuqinColor('suxi');
            setLiuqinColor('chikou');
            setLiuqinColor('xiaoji');
            setLiuqinColor('kongwang');
            setTiangan();
            break;
        case '小吉宫':
            $('.xiaoji .liuqin').text("自身");
            $('.xiaoji .liuqin').append('<span class="shi" style="color: #00CED1"> 时</span>');
            $('.xiaoji .dizhi').text(dizhi);
            var kongwangDizhi = getDizhiByNumber((getNumberByDizhi(dizhi) + 2) > 12 ? (getNumberByDizhi(dizhi) + 2) % 12 : (getNumberByDizhi(dizhi) + 2))
            var daanDizhi = getDizhiByNumber((getNumberByDizhi(dizhi) + 4) > 12 ? (getNumberByDizhi(dizhi) + 4) % 12 : (getNumberByDizhi(dizhi) + 4))
            var liulianDizhi = getDizhiByNumber((getNumberByDizhi(dizhi) + 6) > 12 ? (getNumberByDizhi(dizhi) + 6) % 12 : (getNumberByDizhi(dizhi) + 6))
            var suxiDizhi = getDizhiByNumber((getNumberByDizhi(dizhi) + 8) > 12 ? (getNumberByDizhi(dizhi) + 8) % 12 : (getNumberByDizhi(dizhi) + 8))
            var chikouDizhi = getDizhiByNumber((getNumberByDizhi(dizhi) + 10) > 12 ? (getNumberByDizhi(dizhi) + 10) % 12 : (getNumberByDizhi(dizhi) + 10))
            $('.daan .dizhi').text(daanDizhi);
            $('.liulian .dizhi').text(liulianDizhi);
            $('.suxi .dizhi').text(suxiDizhi);
            $('.chikou .dizhi').text(chikouDizhi);
            $('.kongwang .dizhi').text(kongwangDizhi);
            $('.suxi .liuqin').text(getLiuqin(dizhi, suxiDizhi));
            $('.liulian .liuqin').text(getLiuqin(dizhi, liulianDizhi));
            $('.chikou .liuqin').text(getLiuqin(dizhi, chikouDizhi));
            $('.kongwang .liuqin').text(getLiuqin(dizhi, kongwangDizhi));
            $('.daan .liuqin').text(getLiuqin(dizhi, daanDizhi));
            setDizhiColor('daan', daanDizhi);
            setDizhiColor('liulian', liulianDizhi);
            setDizhiColor('suxi', suxiDizhi);
            setDizhiColor('chikou', chikouDizhi);
            setDizhiColor('xiaoji', dizhi);
            setDizhiColor('kongwang', kongwangDizhi);
            setLiushenColor('daan');
            setLiushenColor('liulian');
            setLiushenColor('suxi');
            setLiushenColor('chikou');
            setLiushenColor('xiaoji');
            setLiushenColor('kongwang');
            setLiuqinColor('daan');
            setLiuqinColor('liulian');
            setLiuqinColor('suxi');
            setLiuqinColor('chikou');
            setLiuqinColor('xiaoji');
            setLiuqinColor('kongwang');
            setTiangan();
            break;
        case '空亡宫':
            $('.kongwang .liuqin').text("自身");
            $('.kongwang .liuqin').append('<span class="shi" style="color: #00CED1"> 时</span>');
            $('.kongwang .dizhi').text(dizhi);
            var daanDizhi = getDizhiByNumber((getNumberByDizhi(dizhi) + 2) > 12 ? (getNumberByDizhi(dizhi) + 2) % 12 : (getNumberByDizhi(dizhi) + 2))
            var liulianDizhi = getDizhiByNumber((getNumberByDizhi(dizhi) + 4) > 12 ? (getNumberByDizhi(dizhi) + 4) % 12 : (getNumberByDizhi(dizhi) + 4))
            var suxiDizhi = getDizhiByNumber((getNumberByDizhi(dizhi) + 6) > 12 ? (getNumberByDizhi(dizhi) + 6) % 12 : (getNumberByDizhi(dizhi) + 6))
            var chikouDizhi = getDizhiByNumber((getNumberByDizhi(dizhi) + 8) > 12 ? (getNumberByDizhi(dizhi) + 8) % 12 : (getNumberByDizhi(dizhi) + 8))
            var xiaojiDizhi = getDizhiByNumber((getNumberByDizhi(dizhi) + 10) > 12 ? (getNumberByDizhi(dizhi) + 10) % 12 : (getNumberByDizhi(dizhi) + 10))
            $('.daan .dizhi').text(daanDizhi);
            $('.liulian .dizhi').text(liulianDizhi);
            $('.suxi .dizhi').text(suxiDizhi);
            $('.chikou .dizhi').text(chikouDizhi);
            $('.xiaoji .dizhi').text(xiaojiDizhi);
            $('.suxi .liuqin').text(getLiuqin(dizhi, suxiDizhi));
            $('.liulian .liuqin').text(getLiuqin(dizhi, liulianDizhi));
            $('.chikou .liuqin').text(getLiuqin(dizhi, chikouDizhi));
            $('.xiaoji .liuqin').text(getLiuqin(dizhi, xiaojiDizhi));
            $('.daan .liuqin').text(getLiuqin(dizhi, daanDizhi));
            setDizhiColor('daan', daanDizhi);
            setDizhiColor('liulian', liulianDizhi);
            setDizhiColor('suxi', suxiDizhi);
            setDizhiColor('chikou', chikouDizhi);
            setDizhiColor('xiaoji', xiaojiDizhi);
            setDizhiColor('kongwang', dizhi);
            setLiushenColor('daan');
            setLiushenColor('liulian');
            setLiushenColor('suxi');
            setLiushenColor('chikou');
            setLiushenColor('xiaoji');
            setLiushenColor('kongwang');
            setLiuqinColor('daan');
            setLiuqinColor('liulian');
            setLiuqinColor('suxi');
            setLiuqinColor('chikou');
            setLiuqinColor('xiaoji');
            setLiuqinColor('kongwang');
            setTiangan();
            break;
    }
}

function getZiTiangan() {
    var riLing = $('#dayz').text().substring(0, 1);
    var ziTiangan = null;
    if (riLing == '甲' || riLing == '己') {
        ziTiangan = '甲';
    } else if (riLing == '乙' || riLing == '庚') {
        ziTiangan = '丙';
    } else if (riLing == '丙' || riLing == '辛') {
        ziTiangan = '戊';
    } else if (riLing == '丁' || riLing == '壬') {
        ziTiangan = '庚';
    } else if (riLing == '戊' || riLing == '癸') {
        ziTiangan = '壬';
    }
    return ziTiangan;
}

function setDizhiColor(gong, dizhi) {
    if (dizhi == '子' || dizhi == '亥') {
        $('.' + gong + ' .dizhi').css('color', '#426ab3');
        $('.' + gong + ' .dizhiShuxing').text('(水)');
    } else if (dizhi == '寅' || dizhi == '卯') {
        $('.' + gong + ' .dizhi').css('color', '#5c7a29');
        $('.' + gong + ' .dizhiShuxing').text('(木)');
    } else if (dizhi == '巳' || dizhi == '午') {
        $('.' + gong + ' .dizhi').css('color', '#d93a49');
        $('.' + gong + ' .dizhiShuxing').text('(火)');
    } else if (dizhi == '丑' || dizhi == '未' || dizhi == '辰' || dizhi == '戌') {
        $('.' + gong + ' .dizhi').css('color', '#6b473c');
        $('.' + gong + ' .dizhiShuxing').text('(土)');
    } else if (dizhi == '申' || dizhi == '酉') {
        $('.' + gong + ' .dizhi').css('color', 'chocolate');
        $('.' + gong + ' .dizhiShuxing').text('(金)');
    }
}

function setLiushenColor(gong) {
    var liushen = $('.' + gong + ' .liushen').text();
    if (liushen == '玄武') {
        $('.' + gong + ' .liushen').css('color', '#426ab3');
    } else if (liushen == '青龙') {
        $('.' + gong + ' .liushen').css('color', '#5c7a29');
    } else if (liushen == '朱雀') {
        $('.' + gong + ' .liushen').css('color', '#d93a49');
    } else if (liushen == '腾蛇' || liushen == '勾陈') {
        $('.' + gong + ' .liushen').css('color', '#6b473c');
    } else if (liushen == '白虎') {
        $('.' + gong + ' .liushen').css('color', 'chocolate');
    }
}

function setTianganColor(gong) {
    var tiangan = $('.' + gong + ' .tiangan').text();
    if (tiangan == '壬' || tiangan == '癸') {
        $('.' + gong + ' .tiangan').css('color', '#426ab3');
    } else if (tiangan == '甲' || tiangan == '乙') {
        $('.' + gong + ' .tiangan').css('color', '#5c7a29');
    } else if (tiangan == '丙' || tiangan == '丁') {
        $('.' + gong + ' .tiangan').css('color', '#d93a49');
    } else if (tiangan == '戊' || tiangan == '己') {
        $('.' + gong + ' .tiangan').css('color', '#6b473c');
    } else if (tiangan == '庚' || tiangan == '辛') {
        $('.' + gong + ' .tiangan').css('color', 'chocolate');
    }
}

function setLiuqinColor(gong) {
    var liuqin = $('.' + gong + ' .liuqin').text();
    if (liuqin == '官鬼') {
        $('.' + gong + ' .liuqin').css('color', '#426ab3');
    } else if (liuqin == '父母') {
        $('.' + gong + ' .liuqin').css('color', '#5c7a29');
    } else if (liuqin == '兄弟' || liuqin == '自身') {
        $('.' + gong + ' .liuqin').css('color', '#d93a49');
    } else if (liuqin == '子孙' || liuqin == '勾陈') {
        $('.' + gong + ' .liuqin').css('color', '#6b473c');
    } else if (liuqin == '妻财') {
        $('.' + gong + ' .liuqin').css('color', 'chocolate');
    }
}

function getGong(number) {
    switch (number) {
        case 1:
            return '大安宫';
            break;
        case 2:
            return '留恋宫';
            break;
        case 3:
            return '速喜宫';
            break;
        case 4:
            return '赤口宫';
            break;
        case 5:
            return '小吉宫';
            break;
        case 6:
            return '空亡宫';
            break;
    }
}

function getNumberByDizhi(hours) {
    switch (hours) {
        case '子':
            return 1;
            break;
        case '丑':
            return 2;
            break
        case '寅':
            return 3;
            break
        case '卯':
            return 4;
            break
        case '辰':
            return 5;
            break
        case '巳':
            return 6;
            break
        case '午':
            return 7;
            break
        case '未':
            return 8;
            break
        case '申':
            return 9;
            break
        case '酉':
            return 10;
            break
        case '戌':
            return 11;
            break
        case '亥':
            return 12;
            break
    }
}

function getDizhiByNumber(dizhi) {
    switch (dizhi) {
        case 1:
            return '子';
            break;
        case 2:
            return '丑';
            break
        case 3:
            return '寅';
            break
        case 4:
            return '卯';
            break
        case 5:
            return '辰';
            break
        case 6:
            return '巳';
            break
        case 7:
            return '午';
            break
        case 8:
            return '未';
            break
        case 9:
            return '申';
            break
        case 10:
            return '酉';
            break
        case 11:
            return '戌';
            break
        case 12:
            return '亥';
            break
    }
}

function getDizhi(hours) {
    if (hours >= 23 && hours < 25) {
        return '子';
    } else if (hours >= 1 && hours < 3) {
        return '丑';
    } else if (hours >= 3 && hours < 5) {
        return '寅';
    } else if (hours >= 5 && hours < 7) {
        return '卯';
    } else if (hours >= 7 && hours < 9) {
        return '辰';
    } else if (hours >= 9 && hours < 11) {
        return '巳';
    } else if (hours >= 11 && hours < 13) {
        return '午';
    } else if (hours >= 13 && hours < 15) {
        return '未';
    } else if (hours >= 15 && hours < 17) {
        return '申';
    } else if (hours >= 17 && hours < 19) {
        return '酉';
    } else if (hours >= 19 && hours < 21) {
        return '戌';
    } else if (hours >= 21 && hours < 23) {
        return '亥';
    } else if (hours == 0) {
        return '子';
    }
}

function getLiuqin(dizhiA, dizhiB) {

    if (dizhiA == '子') {
        if (dizhiB == '寅') {
            return '子孙';
        } else if (dizhiB == '辰') {
            return '兄弟';
        } else if (dizhiB == '午') {
            return '妻财';
        } else if (dizhiB == '申') {
            return '父母';
        } else if (dizhiB == '戌') {
            return '官鬼';
        }
    }

    if (dizhiA == '丑') {
        if (dizhiB == '卯') {
            return '官鬼';
        } else if (dizhiB == '巳') {
            return '父母';
        } else if (dizhiB == '未') {
            return '兄弟';
        } else if (dizhiB == '酉') {
            return '子孙';
        } else if (dizhiB == '亥') {
            return '妻财';
        }
    }

    if (dizhiA == '寅') {
        if (dizhiB == '子') {
            return '父母';
        } else if (dizhiB == '辰') {
            return '兄弟';
        } else if (dizhiB == '午') {
            return '子孙';
        } else if (dizhiB == '申') {
            return '官鬼';
        } else if (dizhiB == '戌') {
            return '妻财';
        }
    }

    if (dizhiA == '卯') {
        if (dizhiB == '丑') {
            return '妻财';
        } else if (dizhiB == '巳') {
            return '子孙';
        } else if (dizhiB == '未') {
            return '兄弟';
        } else if (dizhiB == '酉') {
            return '官鬼';
        } else if (dizhiB == '亥') {
            return '父母';
        }
    }

    if (dizhiA == '辰') {
        if (dizhiB == '子') {
            return '妻财';
        } else if (dizhiB == '寅') {
            return '官鬼';
        } else if (dizhiB == '午') {
            return '父母';
        } else if (dizhiB == '申') {
            return '子孙';
        } else if (dizhiB == '戌') {
            return '兄弟';
        }
    }

    if (dizhiA == '巳') {
        if (dizhiB == '丑') {
            return '子孙';
        } else if (dizhiB == '卯') {
            return '父母';
        } else if (dizhiB == '未') {
            return '兄弟';
        } else if (dizhiB == '酉') {
            return '妻财';
        } else if (dizhiB == '亥') {
            return '官鬼';
        }
    }

    if (dizhiA == '午') {
        if (dizhiB == '子') {
            return '官鬼';
        } else if (dizhiB == '寅') {
            return '父母';
        } else if (dizhiB == '辰') {
            return '子孙';
        } else if (dizhiB == '申') {
            return '妻财';
        } else if (dizhiB == '戌') {
            return '兄弟';
        }
    }

    if (dizhiA == '未') {
        if (dizhiB == '丑') {
            return '兄弟';
        } else if (dizhiB == '卯') {
            return '官鬼';
        } else if (dizhiB == '巳') {
            return '父母';
        } else if (dizhiB == '酉') {
            return '子孙';
        } else if (dizhiB == '亥') {
            return '妻财';
        }
    }

    if (dizhiA == '申') {
        if (dizhiB == '子') {
            return '子孙';
        } else if (dizhiB == '寅') {
            return '妻财';
        } else if (dizhiB == '辰') {
            return '父母';
        } else if (dizhiB == '午') {
            return '官鬼';
        } else if (dizhiB == '戌') {
            return '兄弟';
        }
    }

    if (dizhiA == '酉') {
        if (dizhiB == '丑') {
            return '兄弟';
        } else if (dizhiB == '卯') {
            return '妻财';
        } else if (dizhiB == '巳') {
            return '官鬼';
        } else if (dizhiB == '未') {
            return '父母';
        } else if (dizhiB == '亥') {
            return '子孙';
        }
    }

    if (dizhiA == '戌') {
        if (dizhiB == '子') {
            return '妻财';
        } else if (dizhiB == '寅') {
            return '官鬼';
        } else if (dizhiB == '辰') {
            return '兄弟';
        } else if (dizhiB == '午') {
            return '父母';
        } else if (dizhiB == '申') {
            return '子孙';
        }
    }

    if (dizhiA == '亥') {
        if (dizhiB == '丑') {
            return '兄弟';
        } else if (dizhiB == '卯') {
            return '子孙';
        } else if (dizhiB == '巳') {
            return '妻财';
        } else if (dizhiB == '未') {
            return '官鬼';
        } else if (dizhiB == '酉') {
            return '父母';
        }
    }
}

function getTianganByNumber(number) {
    if (number > 10) {
        if (number % 10 == 0) {
            return '癸';
        } else {
            number = number % 10;
        }
    }
    switch (number) {
        case 1:
            return '甲';
            break;
        case 2:
            return '乙';
            break;
        case 3:
            return '丙';
            break;
        case 4:
            return '丁';
            break;
        case 5:
            return '戊';
            break;
        case 6:
            return '己';
            break;
        case 7:
            return '庚';
            break;
        case 8:
            return '辛';
            break;
        case 9:
            return '壬';
            break;
        case 10:
            return '癸';
            break;
    }
}

function getNumberByTiangan(tiangan) {
    switch (tiangan) {
        case '甲':
            return 1;
            break;
        case '乙':
            return 2;
            break;
        case '丙':
            return 3;
            break;
        case '丁':
            return 4;
            break;
        case '戊':
            return 5;
            break;
        case '己':
            return 6;
            break;
        case '庚':
            return 7;
            break;
        case '辛':
            return 8;
            break;
        case '壬':
            return 9;
            break;
        case '癸':
            return 10;
            break;
    }
}

