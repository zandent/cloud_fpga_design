module fpga_portion(
    input CLOCK_50,
    input	[3:0]	KEY,
    input	[9:0]	SW,
    output	[9:0]	LEDR,
    output      [6:0]  HEX0,
    output      [6:0]  HEX1,
	output      [6:0]  HEX2,
	output      [6:0]  HEX3,
	output      [6:0]  HEX4,
	output      [6:0]  HEX5
);
    assign LEDR = SW;
    //assign HEX0 = 7'b1111111;
    assign HEX1 = 7'b1111111;
    //assign HEX2 = 7'b1111111;
    assign HEX3 = 7'b1111111;
    assign HEX4 = 7'b1111111;
    //assign HEX5 = 7'b1111111;
    hex_decoder u_hex_decoder_0(SW[3:0],HEX2);
    hex_decoder u_hex_decoder_1(KEY,HEX5);
    reg [3:0] counter_0;
    reg [24:0] counter_1;
    initial begin
      counter_0 = 4'd0;
      counter_1 = 26'd0;
    end
    always @(posedge CLOCK_50) begin
        counter_1 <= counter_1 + 1'b1;
        if(counter_1 == 0)
            counter_0 <= counter_0 + 1'b1;
    end
    hex_decoder u_hex_decoder_2(counter_0,HEX0);

endmodule

module hex_decoder(hex_digit, segments);
   input [3:0] hex_digit;
   output reg [6:0] segments;
 
   always @(*)
       case (hex_digit)
           4'h0: segments = 7'b100_0000;
           4'h1: segments = 7'b111_1001;
           4'h2: segments = 7'b010_0100;
           4'h3: segments = 7'b011_0000;
           4'h4: segments = 7'b001_1001;
           4'h5: segments = 7'b001_0010;
           4'h6: segments = 7'b000_0010;
           4'h7: segments = 7'b111_1000;
           4'h8: segments = 7'b000_0000;
           4'h9: segments = 7'b001_1000;
           4'hA: segments = 7'b000_1000;
           4'hB: segments = 7'b000_0011;
           4'hC: segments = 7'b100_0110;
           4'hD: segments = 7'b010_0001;
           4'hE: segments = 7'b000_0110;
           4'hF: segments = 7'b000_1110;  
           default: segments = 7'h7f;
       endcase
endmodule

