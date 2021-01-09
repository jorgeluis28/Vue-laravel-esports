<template>
    <!--FOOTER BEGIN-->
    <footer class="footer">
        <div class="wrapper-overfllow">
            <div class="container footer_logo">
                <h2 class="elementor-heading-title elementor-size-default">Our Partners</h2>
                <div class="row">
                    <div class="col-md-3 col-sm-12">
                        <router-link to="">
                            <img src="/assets/images/imgs/1200px-EA_Sports.svg-opw21j2rm8qfaz91fp2bhb9291dp836rm88zrn2vpc.png">
                        </router-link>
                    </div>
                     <div class="col-md-3 col-sm-12">
                        <router-link to="">
                            <img src="/assets/images/bg-banner/microsofts-logo-gets-a-makeover.jpg">
                        </router-link>
                    </div>
                     <div class="col-md-3 col-sm-12">
                        <router-link to="">
                            <img src="/assets/images/imgs/nfl-flag-opw1opk0el6myfvfankhz1pqkukh8pak6rxl4s36kg.png">
                        </router-link>
                    </div>
                     <div class="col-md-3 col-sm-12">
                        <router-link to="">
                            <img src="/assets/images/imgs/SAP_logo-1-300x153-1-onfrketopbdk99l5mivh40hxh1wvjesnt6athdnchs.png">
                        </router-link>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 col-sm-12">
                        <div class="footer-left">
                            <div class="wrap">
                                <h4>Contact us</h4>
                                <ul class="contact-list">
                                    <li><i class="fa fa-flag" aria-hidden="true"></i><span>1388 Street Road, Warminster, PA 18974 <br> Esports & Technology Training Monday–Sunday, 8am - 10pm
                                    </span></li>
                                </ul>
                                <ul class="socials">
                                    <li><a href="https://www.instagram.com/metroesportsus"><i class="fa fa-instagram"
                                                                                              aria-hidden="true"></i></a>
                                    </li>
                                    <li><a href="https://twitter.com/MetroEsportsUS"><i class="fa fa-twitter"
                                                                                        aria-hidden="true"></i></a></li>
                                    <li><a href="https://www.facebook.com/MetroEsportsUS"><i class="fa fa-facebook"
                                                                                             aria-hidden="true"></i></a>
                                    </li>
                                    <li><a href="https://www.linkedin.com/company/metroesportsus"><i class="fa fa-linkedin"
                                                                                                     aria-hidden="true"></i></a>
                                    </li>
                                    <li><a href="https://www.youtube.com/channel/UCgsH6QhUGLFmhX_EBjwY5CQ"><i
                                        class="fa fa-youtube"></i></a></li>
                                    <li><a href="https://www.twitch.tv/metroesportslive"><i class="fa fa-twitch"
                                                                                            aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-12 col-lg-offset-1">
                        <div class="foot-news">
                            <div class="item">
                                <h5>
                                    <router-link :to="{name:'contact'}" class="name">Sign up for our newsletter!</router-link>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div class=" col-lg-3 col-md-4 col-sm-12">
                        <div class="foot-news">
                            <p>METRO ESPORTS AND ENTERTAINMENT GROUP</p>
                            <div class="item">
                                <h6>
                                    <a href="https://www.metroesports.live/" class="name" target="_blank" rel="noopener">www.metroesports.live</a>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-menu-wrap">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">

                        <ul class="footer-menu">
                            <li v-bind:class="{'active': currentRoute === 'home'}">
                                <router-link :to="{name:'home'}"><span>Home</span></router-link>
                            </li>
                            <li v-bind:class="{'active': ['classes','classes_esports_coding','classes_coding_tech'].indexOf(currentRoute) > -1}">
                                <router-link :to="{name:'classes'}"><span>Classes</span></router-link>
                            </li>
                            <li v-bind:class="{'active': ['compete','compete_ac_league'].indexOf(currentRoute) > -1}">
                                <router-link :to="{name:'compete'}"><span>Compete</span></router-link>
                            </li>
                            <li v-bind:class="{'active': currentRoute === 'nfl_flag'}"><router-link :to="{name:'nfl_flag'}"><span>NFL FLAG</span></router-link></li>
                            <li v-bind:class="{'active': currentRoute === 'online_coaching'}"><router-link :to="{name:'online_coaching'}"><span>Online Coaching</span></router-link></li>
                            <li v-bind:class="{'active': currentRoute === 'contact'}"><router-link :to="{name:'contact'}"><span>Contact</span></router-link></li>
                        </ul>
                        <a href="#top" class="foot-up"><span>up <i class="fa fa-caret-up" aria-hidden="true"></i></span></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-xs-6">
                        <div class="copyrights">
                            All Copyrights Reserved @ Metro Tech 2020
                        </div>
                    </div>
                    <!--<div class="col-xs-6">
                        <div class="created">
                            <a href="#">Created by <img src="assets/images/common/created-icon.png" alt="create-by-image"> torbara</a>
                        </div>
                    </div>-->
                </div>
            </div>
        </div>
    </footer>
    <!--FOOTER END-->
</template>

<script>
    export default {
        name: "LayoutFooter",
        computed:{
            currentRoute(){
                return this.$route.name;
            }
        }
    }
</script>

<style scoped>
    .footer_logo .col-md-3{
        text-align: center;
    }
    .footer_logo img{
        height: 100px;
    }
    .footer_logo .row{
        margin-bottom: 30px;
    }
    
</style>
