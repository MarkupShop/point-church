<?php get_header(); ?>

<?php if ( have_posts() ) : ?>

<section id="campus-intro" class="standard-header" data-photo="<?php bloginfo('stylesheet_directory');?>/images/home-intro-bg.jpg">
	<div class="wrapper">
		<h2 class="campus-title"><?php the_title(); ?></h2>
	</div>
	<p class="tagline"><?php the_field('tagline'); ?></p>
</section>
<section class="list">
	<div class="wrapper">
<?php while ( have_posts() ) : the_post(); ?>

		<?php the_content(); ?>


<?php endwhile; ?>
	</div>
</section>
<?php else : ?>
	<p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
<?php endif; ?>


<?php get_footer(); ?>