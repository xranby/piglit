/* [config]
 * expect_result: pass
 * glsl_version: 1.20
 * [end config]
 * Automatically generated by gen_constant_array_size_tests.py
 */
#version 120

float[all(equal(bvec4(false, false, false, false), greaterThan(vec4(-1.5, -1.5, -1.5, -1.5), vec4(-1.5, -0.5, 0.5, 1.5)))) ? 1 : -1] array0;
float[all(equal(bvec4(true, false, false, false), greaterThan(vec4(-0.5, -0.5, -0.5, -0.5), vec4(-1.5, -0.5, 0.5, 1.5)))) ? 1 : -1] array1;
float[all(equal(bvec4(true, true, false, false), greaterThan(vec4(0.5, 0.5, 0.5, 0.5), vec4(-1.5, -0.5, 0.5, 1.5)))) ? 1 : -1] array2;
float[all(equal(bvec4(true, true, true, false), greaterThan(vec4(1.5, 1.5, 1.5, 1.5), vec4(-1.5, -0.5, 0.5, 1.5)))) ? 1 : -1] array3;

main()
{
  gl_Position  = vec4(array0.length()
			    + array1.length()
			    + array2.length()
			    + array3.length());
}
