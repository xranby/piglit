/* [config]
 * expect_result: pass
 * glsl_version: 1.20
 * [end config]
 * Automatically generated by gen_constant_array_size_tests.py
 */
#version 120

float[length(-1.57079632679 - asin(-1.0)) < 0.001 ? 1 : -1] array0;
float[length(-0.339836909454 - asin(-0.333333333333)) < 0.001 ? 1 : -1] array1;
float[length(0.339836909454 - asin(0.333333333333)) < 0.001 ? 1 : -1] array2;
float[length(1.57079632679 - asin(1.0)) < 0.001 ? 1 : -1] array3;

main()
{
  gl_FragColor = vec4(array0.length()
			    + array1.length()
			    + array2.length()
			    + array3.length());
}
