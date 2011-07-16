/* [config]
 * expect_result: pass
 * glsl_version: 1.20
 * [end config]
 * Automatically generated by gen_constant_array_size_tests.py
 */
#version 120

float[length(vec3(-2.0, -2.33333333333, -2.66666666667) - mix(vec3(-2.0, -2.0, -2.0), vec3(-3.0, -3.0, -3.0), vec3(0.0, 0.333333333333, 0.666666666667))) < 0.001 ? 1 : -1] array0;
float[length(vec3(-3.0, -2.0, -0.333333333333) - mix(vec3(-2.0, -2.0, -2.0), vec3(-3.0, 3.0, 3.0), vec3(1.0, 0.0, 0.333333333333))) < 0.001 ? 1 : -1] array1;
float[length(vec3(1.33333333333, 3.0, 2.0) - mix(vec3(-2.0, -2.0, 2.0), vec3(3.0, 3.0, -3.0), vec3(0.666666666667, 1.0, 0.0))) < 0.001 ? 1 : -1] array2;
float[length(vec3(0.333333333333, -1.33333333333, -3.0) - mix(vec3(2.0, 2.0, 2.0), vec3(-3.0, -3.0, -3.0), vec3(0.333333333333, 0.666666666667, 1.0))) < 0.001 ? 1 : -1] array3;
float[length(vec3(2.0, 2.33333333333, 2.66666666667) - mix(vec3(2.0, 2.0, 2.0), vec3(3.0, 3.0, 3.0), vec3(0.0, 0.333333333333, 0.666666666667))) < 0.001 ? 1 : -1] array4;
float[length(vec3(3.0, -2.0, -2.33333333333) - mix(vec3(2.0, -2.0, -2.0), vec3(3.0, -3.0, -3.0), vec3(1.0, 0.0, 0.333333333333))) < 0.001 ? 1 : -1] array5;

main()
{
  gl_Position  = vec4(array0.length()
			    + array1.length()
			    + array2.length()
			    + array3.length()
			    + array4.length()
			    + array5.length());
}
