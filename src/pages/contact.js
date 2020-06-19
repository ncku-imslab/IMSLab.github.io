import React, { Component, createRef } from 'react';

class Contact extends Component {

    /* <div>
    <iframe class="mv4" width="100%" height="600" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=zh-TW&amp;coord=22.997143,120.221371&amp;q=22.997143,120.221371&amp;ie=UTF8&amp;t=&amp;z=16&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" />
    <footer class="mv4 black-70">
        <div class="flex justify-center mb4">
            <article class="w-10"></article>
            <article class="w-20">
                <h4 class="f5 f4-l fw6">電話</h4>
                <a class="f6 db black-70">+886-6-275-7575</a>
                <a class="f6  black-70">Ext.62520-1004</a>
            </article>
            <article class="w-10"></article>
            <article class="w-20">
                <h4 class="tc f5 f4-l fw6">地址</h4>
                <a class="f6 db mb2 black-70">701 台南市大學路 1 號 國立成功大學 成功校區 資訊系館 65A04 室</a>
                <a class="f6 black-70">Room #65A04, Tenth Floor, CSIE Building, Cheng-Kung Campus, No.1, University Road, Tainan City 701, Taiwan (R.O.C.)</a>
            </article>
            <article class="w-10"></article>
            <article class="w-20">
                <h4 class="f5 f4-l fw6"><b>信箱</b></h4>
                <span class="f6 f6-l black-70">imslab@imslab.org</span>
            </article>
            <article class="w-10"></article>
        </div>
    </footer >
</div>
*/

    render() {
        return (
            <div class="flex pa5 center mb0 mt0">
                <div class=" w-50 mr4 bw1">
                    <iframe width="100%" height="100%" src="https://maps.google.com/maps?width=100%&amp;height=400&amp;hl=zh-TW&amp;coord=22.997143,120.221371&amp;q=22.997143,120.221371&amp;ie=UTF8&amp;t=&amp;z=15&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" />
                </div>
                <div class=" w-50 white bg-black-90 tl pa4">
                    <h4 class="f4 f4-l mt0 fw6">E-mail</h4>
                    <span class="white dim f5 f5-l black-70">imslab@imslab.org</span>
                    <br />
                    <br />
                    <h4 class="f4 f4-l fw6">電話 Tel.</h4>
                    <a class="white f5 db black-70">+886-6-275-7575</a>
                    <a class="white f5 black-70">Ext.62520-1004</a>
                    <br />
                    <br />
                    <h4 class="f4 f4-l fw6">地址 Addr.</h4>
                    <a class="white dim f5 db mb3 black-70">701 台南市東區大學路 1 號 國立成功大學 成功校區 資訊系館 65A04 室</a>
                    <a class="white dim f5 black-70">Room 65A04, 10th Floor, CSIE Building, Cheng-Kung Campus, No. 1, Daxue Road, East District, Tainan City 701, Taiwan (R.O.C.)</a>
                </div>
            </div>

        );
    }
}

export default Contact;