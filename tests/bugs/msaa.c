#include "piglit-util.h"
#include "piglit-print-buffer.h"

#define SIZE 4
#define SIZE2 (2*SIZE)

int piglit_width = SIZE, piglit_height = SIZE;
int piglit_window_mode = GLUT_RGBA | GLUT_DOUBLE;

static const char *vert =
	"#version 120\n"
	"void main()\n"
	"{\n"
	"  gl_Position = gl_Vertex;\n"
	"  gl_FrontColor = gl_Color;\n"
	"}\n";

static const char *frag =
	"#version 120\n"
	"void main()\n"
	"{\n"
	"  gl_FragColor = gl_Color;\n"
	"}\n";

enum piglit_result
piglit_display(void)
{
	float vertices[SIZE2][SIZE2][6][2];
	float colors[SIZE2][SIZE2][6][4];
	int i, j, v;

	for (i = 0; i < SIZE2; ++i) {
		for (j = 0; j < SIZE2; ++j) {
			float x0 = (2.0*i-SIZE2)/SIZE2;
			float x1 = (2.0*(i+1)-SIZE2)/SIZE2;
			float y0 = (2.0*j-SIZE2)/SIZE2;
			float y1 = (2.0*(j+1)-SIZE2)/SIZE2;
			vertices[i][j][0][0] = x0; vertices[i][j][0][1] = y0;
			vertices[i][j][1][0] = x1; vertices[i][j][1][1] = y0;
			vertices[i][j][2][0] = x0; vertices[i][j][2][1] = y1;
			vertices[i][j][3][0] = x0; vertices[i][j][3][1] = y1;
			vertices[i][j][4][0] = x1; vertices[i][j][4][1] = y0;
			vertices[i][j][5][0] = x1; vertices[i][j][5][1] = y1;
			for (v = 0; v < 6; ++v) {
				colors[i][j][v][0] = i/15.0;
				colors[i][j][v][1] = j/15.0;
				colors[i][j][v][2] = 0.0;
				colors[i][j][v][3] = 1.0;
			}
		}
	}

	//	glClearColor(0.0, 0.0, 0.0, 0.0);
	//	glClear(GL_COLOR_BUFFER_BIT);
	glVertexPointer(2, GL_FLOAT, sizeof(vertices[0][0][0]), &vertices);
	glEnableClientState(GL_VERTEX_ARRAY);
	glColorPointer(4, GL_FLOAT, sizeof(colors[0][0][0]), &colors);
	glEnableClientState(GL_COLOR_ARRAY);
       	glDrawArrays(GL_TRIANGLES, 0, 6*SIZE2*SIZE2);

	piglit_print_readpixels(SIZE, SIZE, GL_RGBA, GL_UNSIGNED_BYTE);

	piglit_present_results();

	return PIGLIT_PASS;
}

void
piglit_init(int argc, char **argv)
{
	int vs, fs, prog;
	GLuint fbo, rb;

	piglit_require_GLSL_version(120);
	vs = piglit_compile_shader_text(GL_VERTEX_SHADER, vert);
	fs = piglit_compile_shader_text(GL_FRAGMENT_SHADER, frag);
	prog = piglit_link_simple_program(vs, fs);
	piglit_UseProgram(prog);

	glGenFramebuffers(1, &fbo);
	glBindFramebuffer(GL_DRAW_FRAMEBUFFER, fbo);
	glBindFramebuffer(GL_READ_FRAMEBUFFER, fbo);
	glGenRenderbuffers(1, &rb);
	glBindRenderbuffer(GL_RENDERBUFFER, rb);
	glRenderbufferStorageMultisample(GL_RENDERBUFFER, 4, GL_RGBA, SIZE, SIZE);
	glFramebufferRenderbuffer(GL_DRAW_FRAMEBUFFER, GL_COLOR_ATTACHMENT0, GL_RENDERBUFFER, rb);
	if (glCheckFramebufferStatus(GL_DRAW_FRAMEBUFFER) != GL_FRAMEBUFFER_COMPLETE) {
		printf("OMG! Framebuffer not complete!\n");
		piglit_report_result(PIGLIT_FAIL);
	}
}
