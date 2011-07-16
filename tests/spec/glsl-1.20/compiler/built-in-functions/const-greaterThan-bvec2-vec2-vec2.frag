/* [config]
 * expect_result: pass
 * glsl_version: 1.20
 * [end config]
 * Automatically generated by gen_constant_array_size_tests.py
 */
#version 120

float[all(equal(bvec2(false, false), greaterThan(vec2(-1.5, -1.5), vec2(-1.5, -0.5)))) ? 1 : -1] array0;
float[all(equal(bvec2(false, false), greaterThan(vec2(-1.5, -1.5), vec2(0.5, 1.5)))) ? 1 : -1] array1;
float[all(equal(bvec2(true, false), greaterThan(vec2(-0.5, -0.5), vec2(-1.5, -0.5)))) ? 1 : -1] array2;
float[all(equal(bvec2(false, false), greaterThan(vec2(-0.5, -0.5), vec2(0.5, 1.5)))) ? 1 : -1] array3;
float[all(equal(bvec2(true, true), greaterThan(vec2(0.5, 0.5), vec2(-1.5, -0.5)))) ? 1 : -1] array4;
float[all(equal(bvec2(false, false), greaterThan(vec2(0.5, 0.5), vec2(0.5, 1.5)))) ? 1 : -1] array5;
float[all(equal(bvec2(true, true), greaterThan(vec2(1.5, 1.5), vec2(-1.5, -0.5)))) ? 1 : -1] array6;
float[all(equal(bvec2(true, false), greaterThan(vec2(1.5, 1.5), vec2(0.5, 1.5)))) ? 1 : -1] array7;

main()
{
  gl_FragColor = vec4(array0.length()
			    + array1.length()
			    + array2.length()
			    + array3.length()
			    + array4.length()
			    + array5.length()
			    + array6.length()
			    + array7.length());
}
