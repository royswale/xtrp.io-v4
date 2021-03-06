<?php include __DIR__ . "/_config.php" ?>
<?php include get_path_of_function("generate_blocks.php") ?>

<?php $filename = "home"; ?>

<!DOCTYPE html>
<html lang="en" prefix="og: http://ogp.me/ns#">

    <?php include get_path_of_include('head.php'); ?>

    <body class="loading">
        <?php include get_path_of_include("nav.php") ?>

        <div class="container">
            <?php // blocks ?>
            <ul class="block_list">
                <?php // welcome card ?>
                <div class="block welcome">
                    <div class="content">
                        <div class="picture">
                            <img class="default_view lazy_load" alt="Welcome Photo" src="<?=$page_data["home_opening_card"]["card_image_url"]["laptop_view_small"]?>" data-src="<?=$page_data["home_opening_card"]["card_image_url"]["laptop_view"]?>">
                        </div>
                        <div class="text">
                            <div class="top">
                                <div class="left">
                                    <img class="mobile_view lazy_load" alt="Welcome Photo" src="<?=$page_data["home_opening_card"]["card_image_url"]["mobile_view_small"]?>" data-src="<?=$page_data["home_opening_card"]["card_image_url"]["mobile_view"]?>">
                                </div>
                                <div class="right">
                                    <h1 class="catchy_header">
                                        <?php
                                        // create catchy header HTML

                                        // catchy header text
                                        $text_to_display = "Hi, I'm " . $site_details["author"]["name"] . "!";

                                        // text split into words
                                        $words_to_display = explode(" ", $text_to_display);

                                        // loop through words and echo generated HTML
                                        $animation_delay = "";

                                        foreach ($words_to_display as $index => $word) {
                                            $animation_delay = (0.2 + (0.1 * $index)) . 's';
                                            echo '<span class="word_container"><span class="word_animated" style="animation-delay: ' . $animation_delay . ';">' . $word . '</span></span> ';
                                        }
                                        ?>
                                    </h1>
                                    <ul class="social_links animated fadeIn" style="animation-delay: <?php echo $animation_delay; ?>;">
                                        <?php
                                        
                                        foreach($site_details["author"]["social_urls"] as $social_url) {
                                            echo "<a rel='noreferrer' href='" . $social_url["url"] . "' style='--theme-color: " . $social_url["theme_color"] . ";' target='_blank'>" . $social_url["name"] . "</a>";
                                        }
                                        ?>
                                    </ul>
                                </div>
                            </div>
                            <div class="text_content post_content animated fadeIn" style="animation-delay: <?php echo (0.2 + (0.1 * count($words_to_display))) ?>s;">
                                <?=$page_data["home_opening_card"]["card_HTML"]?>
                            </div>
                        </div>
                    </div>
                </div>

                <noscript>
                    <style>
                        body > div.container > ul.block_list > .block.welcome > .content > div.text > div.text_content.animated {
                            opacity: 1 !important;
                        }
                        body > div.container > ul.block_list > .block.welcome > .content > div.text > div.top > div.right > ul.social_links.animated {
                            opacity: 1 !important;
                        }
                        body > div.container > ul.block_list > .block.welcome > .content > div.text > div.top > div.right > h1.catchy_header > span.word_container > span.word_animated {
                            transform: translateY(0) !important;
                        }
                    </style>
                </noscript>

                <?php // a buncha blocks ?>
                <?php
                // if there are less than 15, simply display; if not, display 15, and then use client-side JS to progressively show more
                if(count($page_data["blocks"]) <= 15) {
                    foreach($page_data["blocks"] as $block) {
                        echo generate_blog_block($block);
                    }
                }else {
                    for($i = 0; $i < 15; $i++) {
                        echo generate_blog_block($page_data["blocks"][$i]);
                    }

                    echo "<script>let postBlocksToLoadOnScroll = [";
                    for($n = 15; $n < count($page_data["blocks"]); $n++) {
                        $block_HTML = generate_blog_block($page_data["blocks"][$n]);
                        echo "\"" . base64_encode($block_HTML) . "\", ";
                    }
                    echo "];</script>";
                }
                ?>
            </ul>

            <?php include get_path_of_include("footer.php") ?>
        </div>

        <?php include get_path_of_include("scripts.php") ?>
    </body>

</html>