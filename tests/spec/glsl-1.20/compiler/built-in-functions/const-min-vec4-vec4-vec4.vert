/* [config]
 * expect_result: pass
 * glsl_version: 1.20
 * [end config]
 * Automatically generated by gen_constant_array_size_tests.py
 */
#version 120

float[length(vec4(-2.0, -2.0, -2.0, -2.0) - min(vec4(-2.0, -2.0, -2.0, -2.0), vec4(-2.0, -0.666666666667, 0.666666666667, 2.0))) < 0.001 ? 1 : -1] array0;
float[length(vec4(-2.0, -0.666666666667, -0.666666666667, -0.666666666667) - min(vec4(-0.666666666667, -0.666666666667, -0.666666666667, -0.666666666667), vec4(-2.0, -0.666666666667, 0.666666666667, 2.0))) < 0.001 ? 1 : -1] array1;
float[length(vec4(-2.0, -0.666666666667, 0.666666666667, 0.666666666667) - min(vec4(0.666666666667, 0.666666666667, 0.666666666667, 0.666666666667), vec4(-2.0, -0.666666666667, 0.666666666667, 2.0))) < 0.001 ? 1 : -1] array2;
float[length(vec4(-2.0, -0.666666666667, 0.666666666667, 2.0) - min(vec4(2.0, 2.0, 2.0, 2.0), vec4(-2.0, -0.666666666667, 0.666666666667, 2.0))) < 0.001 ? 1 : -1] array3;

main()
{
  gl_Position  = vec4(array0.length()
			    + array1.length()
			    + array2.length()
			    + array3.length());
}
