<?php
/**
 * Twenty Twenty-Five support.
 *
 * @since   9.6.0
 * @package WooCommerce\Classes
 */

use Automattic\Jetpack\Constants;

defined( 'ABSPATH' ) || exit;

/**
 * WC_Twenty_Twenty_Five class.
 */
class WC_Twenty_Twenty_Five {

	/**
	 * Theme init.
	 */
	public static function init() {

		// Enqueue theme compatibility styles.
		add_filter( 'woocommerce_enqueue_styles', array( __CLASS__, 'enqueue_styles' ) );
	}

	/**
	 * Enqueue CSS for this theme.
	 *
	 * @param  array $styles Array of registered styles.
	 * @return array
	 */
	public static function enqueue_styles( $styles ) {
		unset( $styles['woocommerce-general'] );

		$styles['woocommerce-general'] = array(
			'src'     => str_replace( array( 'http:', 'https:' ), '', WC()->plugin_url() ) . '/assets/css/twenty-twenty-five.css',
			'deps'    => array( 'woocommerce-layout', 'woocommerce-smallscreen' ),
			'version' => Constants::get_constant( 'WC_VERSION' ),
			'media'   => 'all',
			'has_rtl' => true,
		);

		return apply_filters( 'woocommerce_twenty_twenty_five_styles', $styles );
	}
}

WC_Twenty_Twenty_Five::init();

