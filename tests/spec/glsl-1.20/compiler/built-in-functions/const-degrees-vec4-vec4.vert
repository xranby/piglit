/* [config]
 * expect_result: pass
 * glsl_version: 1.20
 * [end config]
 * Automatically generated by gen_constant_array_size_tests.py
 */
#version 120

float[length(vec4(-180.0, -60.0, 60.0, 180.0) - degrees(vec4(-3.14159265359, -1.0471975512, 1.0471975512, 3.14159265359))) < 0.001 ? 1 : -1] array0;

main()
{
  gl_Position  = vec4(array0.length());
}
