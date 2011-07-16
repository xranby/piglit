/* [config]
 * expect_result: pass
 * glsl_version: 1.20
 * [end config]
 * Automatically generated by gen_constant_array_size_tests.py
 */
#version 120

float[all(equal(bvec3(true, false, false), greaterThanEqual(vec3(-1.5, -1.5, -1.5), vec3(-1.5, -0.5, 0.5)))) ? 1 : -1] array0;
float[all(equal(bvec3(false, true, true), greaterThanEqual(vec3(-1.5, -0.5, -0.5), vec3(1.5, -1.5, -0.5)))) ? 1 : -1] array1;
float[all(equal(bvec3(false, false, true), greaterThanEqual(vec3(-0.5, -0.5, 0.5), vec3(0.5, 1.5, -1.5)))) ? 1 : -1] array2;
float[all(equal(bvec3(true, true, false), greaterThanEqual(vec3(0.5, 0.5, 0.5), vec3(-0.5, 0.5, 1.5)))) ? 1 : -1] array3;
float[all(equal(bvec3(true, true, true), greaterThanEqual(vec3(1.5, 1.5, 1.5), vec3(-1.5, -0.5, 0.5)))) ? 1 : -1] array4;
float[all(equal(bvec3(true, true, false), greaterThanEqual(vec3(1.5, -1.5, -1.5), vec3(1.5, -1.5, -0.5)))) ? 1 : -1] array5;

main()
{
  gl_Position  = vec4(array0.length()
			    + array1.length()
			    + array2.length()
			    + array3.length()
			    + array4.length()
			    + array5.length());
}
