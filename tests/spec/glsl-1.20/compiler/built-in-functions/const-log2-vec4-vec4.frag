/* [config]
 * expect_result: pass
 * glsl_version: 1.20
 * [end config]
 * Automatically generated by gen_constant_array_size_tests.py
 */
#version 120

float[length(vec4(-6.64385618977, -0.570607207744, 0.418639735959, 1.0) - log2(vec4(0.01, 0.673333333333, 1.33666666667, 2.0))) < 0.001 ? 1 : -1] array0;

main()
{
  gl_FragColor = vec4(array0.length());
}
