import { Item } from "./models/Item"
import { Param } from "./models/Param"

const dummy = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus a lorem at rutrum. Pellentesque viverra convallis tortor quis euismod. Nulla massa dui, scelerisque ac libero vitae, lacinia convallis nibh. Nunc luctus laoreet diam. Pellentesque semper orci non elementum imperdiet. Curabitur efficitur fermentum nulla'

export const artworks: Item[] = [
	new Item( 'Mirrored Noise', '20220203', dummy, 'perlin_mirrored', [ new Param( 'base_color_hue', 60, 300 ), new Param( 'num_paths', .01 * window.innerWidth, .1 * window.innerWidth ), new Param( 'num_mirror', 6, 64 ), new Param( 'noise_scale', 50, 500 ) ] ),
	new Item( 'Magic Forest', '20220211', dummy, 'forest', [ new Param( 'space_beween_trees', 5, 500 ), new Param( 'angle', .1, 6.28 ), new Param( 'lenght_multiplier', 1, 5 ), new Param( 'noise_scale', 50, 500 ) ] ),
	// new Item ( 'Concentric circles Pattern', '20220211', dummy, 'concentric', [ new Param2( 'base_color_hue', 40, 320 ), new Param2( 'cell_size', 60, 300 ), new Param2( 'concentric_ratio', 1, 10 ), new Param2( 'random_difficulty', 1, 10 ), new Param2( 'circle_cells', 1, 5 ) ] ),
	new Item( 'Orbiting bezier', '20220218', dummy, 'bezier', [ new Param( 'base_color_hue', 60, 300 ), new Param( 'noise_increment_divider', 10, 1000 ) ] ),
	// new Item ( 'Cave', '20220226', dummy, 'cave', [ new Param2( 'base_color_hue', 60, 300 ), new Param2( 'stroke_weight', 1, 2 ), new Param2( 'dx_quotient', 100, 300 ), new Param2( 'noise_factor', 100, 300 ), new Param2( 'count', 3, 12 ) ] ),
	// new Item ( 'Perlin Spiral Bezier', '20220306', dummy, 'perlin_spiral_bezier', [ new Param2( 'base_color_hue', 60, 300 ), new Param2( 'noise_factor', 100, 300 ), new Param2( 'polygon_vertices', 128, 2048 ), new Param2( 'anchor_angle_increment', 0, 1.5 ), new Param2( 'bezier_vertices', 3, 9 ) ] ),
	new Item( 'Organized Dots', '20220316', dummy, 'organized_dots', [ new Param( 'n_factor', 2, 5 ), new Param( 'layers', 3, 16 ), new Param( 'dr', 1, 5 ) ] ),
	// new Item ( 'Jellyfishes', '20220320', dummy, 'jellyfishes', [ new Param2( 'number_jellyfish', 5, 15 ), new Param2( 'displacement_noise', 1, 2 ), new Param2( 'noise_scale', 100, 600 ) ] ),
	// new Item ( 'Cave rotated', '20220426', dummy, 'cricled_cave', [ new Param2( 'base_color_hue', 60, 300 ), new Param2( 'noise_factor', 50, 1000 ), new Param2( 'line_count', 128, 2048 ), new Param2( 'circle_count', 1, 16 ) ] ),
	// new Item ( 'Poli', '20220418', dummy, 'poli', [ new Param2( 'layers', 2, 6, 1 ), new Param2( 'polygon_sides', 3, 12, 1 ), new Param2( 'polygon_size_ratio', 5, 15, 1 ), new Param2( 'layers_radius_ratio', 1, 2, .01 ) ] ),
	new Item( 'Mountains', '20220410', dummy, 'mountains', [ new Param( 'base_color_hue', 60, 300 ), new Param( 'noise_factor', 50, 1000 ), new Param( 'moutain_resolution', 2, 15 ), new Param( 'moutain_size_ratio', 1, 15 ), new Param( 'number_mountains', 2, 15 ) ] ),
	// new Item ( 'Patterns', '20220418', dummy, 'patterns', [ new Param2( 'layers', 2, 6, 1 ), new Param2( 'nodes', 3, 12, 1 ), new Param2( 'size_ratio', 5, 15, 1 ), new Param2( 'layers_radius_ratio', 1, 2, .01 ) ] ),
	// new Item ( 'Manta', '20220424', dummy, 'lines', [ new Param2( 'stroke_weight', .5, 3, .1 ), new Param2( 'distance', 1, 10, 1 ), new Param2( 'noise_scale', 50, 1000, 1 ), new Param2( 'perp_line_length', 5, 300, 1 ), new Param2( 'num_paths', 2, 20, 1 ) ] ),
	// new Item ( 'Patterns', '20220425', dummy, 'grid', [ new Param2( 'grid_cells', 1, 3, 12 ), new Param2( 'base_color', 0, 360, 12 ) ] ),
	new Item( 'Iris', '20220509', dummy, 'iris', [ new Param( 'noise_scale', 1, 16, 1 ), new Param( 'base_color_hue', 30, 330 ), new Param( 'nodes', 3, 128, 1 ), new Param( 'resolution', 1, 24, 1 ) ] )
]
